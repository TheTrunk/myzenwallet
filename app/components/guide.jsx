import React from 'react'
import {Container, Row, Col} from 'reactstrap';

import MDSettings from 'react-icons/lib/md/settings'

export default class ZGuide extends React.Component {
  render () {
    return (      
      <Container>      
        <Row>
          <Col>                          
            <h3><span className="guide1a">1. Creating a new wallet</span></h3>
            <ul>
              <li><span className="guide1b">Go to</span> <a href="https://wallet.myhush.org">https://wallet.myhush.org</a></li>
              <li><span className="guide1c">Enter a strong but easy to remember secret phrase. Save this somewhere and do NOT forget it.</span></li>
              <li><span className="guide1d">Click the</span> <code><span className="guide1e">Generate Wallet</span></code> <span className="guide1f">down below the input.</span></li>
                <ul><li><span className="guide1g">This creates a</span> <a href="https://en.bitcoin.it/wiki/Deterministic_wallet"><span className="guide1h">deterministic wallet</span></a> <span className="guide1i">based on your secret phrase.</span></li></ul>                        
            </ul>

            <br/>

            <h3><span className="guide2a">2. Accessing an existing wallet</span></h3>
            <ul>
              <li><span className="guide2b">If you've created a wallet on</span> <a href="https://wallet.myhush.org">https://wallet.myhush.org</a> <span className="guide2c">via the secret phrase, simply re-enter the same phrase.</span></li>
              <li><span className="guide2d">For those with a</span> <code>wallet.dat</code> <span className="guide2e">file generated by GUI wallets. Click</span> <code><span className="guide2f">settings</span></code> (<MDSettings/>)<span className="guide2g">, select the</span> <code><span className="guide2h">Load wallet.dat</span></code> <span className="guide2i">option and load your</span> <code>wallet.dat</code> <span className="guide2j">file</span></li>
              <li><span className="guide2k">To unlock a single address, Click</span> <code><span className="guide2l">settings</span></code> (<MDSettings/>)<span className="guide2m">, select the</span> <code><span className="guide2n">Paste private key</span></code> <span className="guide2o">option, paste in your private key and click the Unlock Private Key button</span></li>
            </ul>
          </Col>
        </Row>
      </Container>
    )
  }
}