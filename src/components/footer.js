import React from 'react'
import './footer.css'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='heading'>
        <h3>! Your FeedBack !</h3>
      </div>

      <div className='row'>
        <div className='content'>
          <ul>
            <li><h5>Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O.</h5></li>
            <li><h5>The player who succeeds in placing three of their marks in a horizontal,vertical, or diagonal row is the winner.</h5></li>
            <li><h5>Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid.</h5></li>
          </ul>
        </div>
        <div className='form'>
          <div class="login-box">
            <h4>Drop your feedback here</h4>
            <form action='https://getform.io/f/1b9a34fa-5fc3-4c96-9c97-b4a626bbcbeb' method='POST'>
              <div class="user-box">
                <input type="text" name="" required="" />
                <label>Name</label>
              </div>
              <div class="user-box">
                <input type="text" rows="7" name="" required="" />
                <label>Message</label>
              </div>
              <button type='submit' className="btn btn-primary">Send</button>
            </form>
          </div></div>
      </div>

    </div>
  )
}
