/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/


export default function Message(props){
  let msgOnDisplay;
    const messages = {
      p1: 'Player 1',
      P2: 'Player 2',
      p1win: 'Player 1 wins',
      p2win: 'Player 2 wins',
      draw: 'draw'
    };

    if(props.showMessage.winner === 1 || props.showMessage.winner === 2){
      props.showMessage.winner === 1 ? msgOnDisplay = messages.p1win : msgOnDisplay = messages.p2win;
    }
    else if(!props.showMessage.board.includes(0)){
        msgOnDisplay = messages.draw;
    }
    else{
      if(props.showMessage.state === 'plr1'){
        msgOnDisplay = messages.p1;
      }else{
        msgOnDisplay = messages.P2;
      }
    }

  return (
    <h3>
        {currentMessage: msgOnDisplay}
    </h3>
  );
}
