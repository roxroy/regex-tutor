import React from 'react'
import { Link } from 'react-router-dom'
import Player from './Player'
import Game from './Game'
import Cheatsheet from './Cheatsheet'
import quizzService from '../services/quizzService'
import Modal from './Modal'

class Fight extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      currentQuizz: {},
      levelId: props.levelId,
      playerHealth: 100,
      opponentHealth: 100,
      gameMode: props.gameMode,
      level: props.level,
      modalHeader: '',
      modalContent: '',
      started: false
    };

    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.startGame = this.startGame.bind(this);
    this.showCheatsheet = this.showCheatsheet.bind(this);
  }

  startGame() {
    this.getNextQuestion();
    this.setState({started: true, opponentHealth: 100, playerHealth: 100});
    this.newTime();
  }

  newTime() {
    this.opponentInterval = setInterval(()=> {
      let playerHealth = this.state.playerHealth;

      if (quizzService.randomRange(1, 10) > 6) {
        playerHealth -= 10;

        if (playerHealth <= 0) {
          clearInterval(this.opponentInterval);          
          let modalHeader = 'Nice Try!', modalContent = `You have been defeated by ${this.props.opponent} :(`;       
          if (this.state.gameMode === 'fight') {
            this.props.updateUser(true, false);
          } else {
            this.props.updateUser(false);
          }
          this.setState({playerHealth, modalHeader, modalContent});
          $('#modal2').modal('open', {dismissible: false});
          return;
        }

        this.setState({playerHealth});
      }

      clearInterval(this.opponentInterval);
      this.newTime();
     }, quizzService.randomRange(1000,4000));
  }

  handleNextQuestion(isCorrectAnswer) {
    let opponentHealth = this.state.opponentHealth;

    if (isCorrectAnswer) {
      opponentHealth -= 10;

      if (opponentHealth <= 0) {
        clearInterval(this.opponentInterval);
        let modalHeader = 'Congratulations!', modalContent = `You have defeated ${this.props.opponent}`;       
        if (this.state.gameMode === 'fight') {
          let belt = this.props.beltPromotion(this.state.levelId);                    
          if (belt) {
            modalContent += ` and have been promoted to ${belt} belt`;
          }    
          this.props.updateUser(true, true, belt);
        }
        else {
          this.props.updateUser(false);
        }
        modalContent += '!';
        this.setState({opponentHealth, modalHeader, modalContent});
        $('#modal2').modal('open', {dismissible: false});
        return;
      }

      this.setState({opponentHealth});      
    }

    this.getNextQuestion();
  }

  getNextQuestion() {        
    const question = quizzService.getQuestion(this.props.questions, this.state.currentQuizz.questionId);
    this.setState({
      currentQuizz: question,
    });
  }

  showCheatsheet() {
    $('#modal1').modal('open');
  }

  componentWillMount() {
    document.querySelectorAll(".scroll-body")[0].classList.add("scroll-fight");              
  }

  componentWillUnmount() {
      clearInterval(this.opponentInterval);
      document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-fight");      
  }   

  render() {    
    return <div className="spar">   
      <Link to="/app/dojo" className="waves-effect waves-teal btn-flat pink-text text-accent-2 back-btn">
        <i className="material-icons left">arrow_back</i>Back
      </Link>
      <div className="row center-align spar-title">
        <h3 className='pink-text text-accent-2'>{this.state.gameMode}</h3>
        <p className="flow-text text-darken-4">{this.state.level}</p>
      </div>
      <div className="row"> 
        <div className="col s5">
          <Player avatar={this.props.user.avatarUrl} name={this.props.user.username} health={this.state.playerHealth} />
        </div>
        <div className="col s5 offset-s2">
          <Player avatar={`/images/${this.state.gameMode}-200-${this.props.belt}.png`} name={this.props.opponent} health={this.state.opponentHealth} />
        </div>        
      </div>
      <div className="game-container center-align">
        <div className="row">
          <button disabled={this.state.started} className="btn waves-effect waves-light grey darken-1" onClick={this.startGame}>Start</button> 
        </div>        
        {this.state.gameMode === 'spar'
            ? <button className="btn waves-effet waves-light grey darken-1" onClick={this.showCheatsheet}>Cheatsheet</button>
            : ''
        }          
        {this.state.started 
          ? <Game quizz={this.state.currentQuizz} nextQuestion={this.handleNextQuestion} />         
          : ''
        }
      </div>            
      <Cheatsheet answers={this.props.questions} />     
      <Modal modalHeader={this.state.modalHeader} modalContent={this.state.modalContent} startGame={this.startGame} />
    </div>
  }
}

export default Fight;