# python -m flask --app index run
# python -m flask --app index run --host 0.0.0.0
# opcional si puerto 5000 esta ocupado: --port 5001

from dataclasses import dataclass
from flask import Flask, jsonify, request, render_template, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


@dataclass
class Player(db.Model):
    id: int
    username: str
    password: str
    logged: bool
    in_game: bool

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    logged = db.Column(db.Boolean, nullable=False, default=False)
    in_game = db.Column(db.Boolean, nullable=False, default=False)

    def __repr__(self):
        return f'<Player {self.username}>'

    def check_password(self, password):
        return self.password == password


@dataclass
class Game(db.Model):
    id: int
    player1_id: int
    player2_id: int
    board: str

    id = db.Column(db.Integer, primary_key=True)
    player1_id = db.Column(db.Integer, nullable=False)
    player2_id = db.Column(db.Integer, nullable=False)
    board = db.Column(db.String(2), nullable=False, default="__")

    def __repr__(self):
        return f'<Game {self.id}>'


with app.app_context():
    db.create_all()


@app.route('/')
def menu():
    return render_template('menu.html')


@app.route('/signup_menu')
def signup_menu():
    return render_template('signup.html')


@app.route('/login_menu')
def login_menu():
    return render_template('login.html')


@app.route('/login', methods=['POST'])
def login():
    player_data = request.get_json()
    player = Player.query.filter_by(username=player_data["username"]).first()
    if player and player.check_password(player_data["password"]):
        return jsonify({'status': 'ok'})
    else:
        return jsonify({'status': 'not ok'})


@app.route('/list_menu')
def show_list():
    return render_template('list.html')


@app.route('/list_js')
def list_js():
    return render_template('list.js')


@app.route('/games', methods=['GET', 'POST', 'DELETE'])
def route_games():
    if request.method == 'GET':
        games = Game.query.all()
        return jsonify(games)

    elif request.method == 'POST':
        data = request.get_json()
        game = Game(player1_id=data["player1_id"], player2_id=data["player2_id"])
        db.session.add(game)
        db.session.commit()
        return "SUCCESS"

    elif request.method == 'DELETE':
        games = Game.query.all()
        for game in games:
            db.session.delete(game)
        db.session.commit()
        return "SUCCESS"


@app.route('/games/<game_id>', methods=['GET', 'PUT', 'DELETE'])
def route_games_id(game_id):
    if request.method == 'GET':
        game = Game.query.filter_by(id=game_id).first()
        return jsonify(game)

    # elif request.method == 'PUT':
    #     return TODO

    elif request.method == 'DELETE':
        game = Game.query.filter_by(id=game_id).first()
        db.session.delete(game)
        db.session.commit()
        return "SUCCESS"


@app.route('/players', methods=['GET', 'POST', 'PUT'])
def route_players():
    if request.method == 'GET':
        return get_players()
    elif request.method == 'POST':
        player_data = request.get_json()
        return insert_player(player_data)
    elif request.method == 'PUT':
        player_data = request.get_json()
        return update_player(player_data)


@app.route('/players/<player_id>', methods=['GET', 'DELETE'])
def route_players_id(player_id):
    if request.method == 'GET':
        return get_player_by_id(player_id)
    elif request.method == 'DELETE':
        return delete_player(player_id)


def get_players():
    players = Player.query.all()
    return jsonify(players)


def get_player_by_id(player_id):
    player = Player.query.filter_by(id=player_id).first()
    return jsonify(player)


def insert_player(player_data):
    usernames = []
    players = Player.query.all()
    for p in players:
        usernames.append(p.username)
    if player_data["username"] not in usernames:
        player = Player(username=player_data["username"], password=player_data["password"])
        db.session.add(player)
        db.session.commit()
        return jsonify(player)
    else:
        return jsonify({'Message': "Player already exists"})


def update_player(player_data):
    player = Player.query.filter_by(id=player_data['id']).first()
    if player:
        player.username = player_data['username']
        player.password = player_data['password']
        db.session.commit()
        return jsonify({'Message': 'Player has been updated successfully', 'Player': player_data})
    else:
        return jsonify({'Message': "Player doesn't exist"})


def delete_player(player_id):
    player = Player.query.filter_by(id=player_id).first()
    if player:
        db.session.delete(player)
        db.session.commit()
        return jsonify({'Deleted Player': player_id, 'Message': 'Player has been deleted successfully'})
    else:
        return jsonify({'Message': 'Player not found or already deleted'})


if __name__ == '__main__':
    app.run()