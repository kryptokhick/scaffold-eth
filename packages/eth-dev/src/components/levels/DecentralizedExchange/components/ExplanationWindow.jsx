import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import { connectController as wrapGlobalGameData } from '../../../gameItems'
import { Button, CodeContainer, WindowModal } from '../../../gameItems/components'

const ExplanationWindow = ({
  isOpen,
  globalGameActions,
  setContractWindowVisibility,
  setExplanationWindowVisibility,
  setEtherDeltaWindowVisibility
}) => {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <WindowModal
      initTop={10}
      initLeft={10}
      initHeight={window.innerHeight * 0.9}
      initWidth={window.innerWidth * 0.4}
      backgroundPath='./assets/items/window.png'
      dragAreaHeightPercent={12}
      windowTitle='Decentralized Exchanges'
      isOpen={isOpen}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <div
        className='content'
        style={{
          float: 'left',
          width: '100%',
          height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
          backgroundColor: '#161B22'
        }}
      >
        <div
          style={{
            marginTop: '1%',
            marginBottom: '5%',
            // color: '#16DC8C',
            color: '#C9D1D9',
            fontFamily: 'Roboto, Arial, Helvetica Neue, Helvetica, sans-serif',
            fontSize: '16px'
          }}
        >
          {/* <Markdown>{fileContent}</Markdown> */}
          Ethereum has a long and rich history when it comes to decentralized exchanges.
          {currentStep > 0 && (
            <>
              <br />
              <br />A decentralized exchange is a bundle of smart contracts where users can freely
              trady tokens with each other. Just like they would on centralized exchanges like
              Coinbase or Binance.
            </>
          )}
          {currentStep > 1 && (
            <>
              <br />
              <br />
              One of the first DEX's that got some notable traction within the community was an
              exchange known as{' '}
              <a href='https://etherdelta.com' _target='blank'>
                EtherDelta
              </a>
              .
            </>
          )}
          {currentStep > 2 && (
            <>
              <br />
              The original code and the smart contracts used to run this DEX can be found{' '}
              <a
                href='https://github.com/etherdelta/smart_contract/blob/master/etherdelta.sol'
                _target='blank'
              >
                here
              </a>
              .
              <br />
              <br />
            </>
          )}
          {currentStep > 3 && (
            <>
              Some time in early 2017 Vitalik Buterin{' '}
              <a
                href='https://www.reddit.com/r/ethereum/comments/55m04x/lets_run_onchain_decentralized_exchanges_the_way/'
                _target='blank'
              >
                proposed
              </a>
              a way to run a decentralized exchange on Ethereum. He later{' '}
              <a
                href='https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281'
                _target='blank'
              >
                expanded
              </a>
              on the original idea by introducing the now famouse x*y=k formula.
              <br />
              <br />
            </>
          )}
          {currentStep > 4 && (
            <>
              One of the people that stumbled accrosse Buterins post was{' '}
              <a href='https://twitter.com/haydenzadams' _target='blank'>
                Hayden Adams
              </a>
              , founder of Uniswap. He promptly coded up a{' '}
              <a href='https://github.com/Uniswap/old-solidity-contracts' _target='blank'>
                MVP
              </a>{' '}
              which eventually grew into what{' '}
              <a href='https://app.uniswap.org' _target='blank'>
                Uniswap
              </a>{' '}
              is today.
              <br />
              <br />
            </>
          )}
          {currentStep > 5 && (
            <>
              A boilerplate has been prepared for you that you can fetch here:
              <br />
              <br />
              <a
                href='https://github.com/squirtleDevs/scaffold-eth/tree/challenge-3-single-pool-dex'
                _target='blank'
              >
                https://github.com/squirtleDevs/scaffold-eth/tree/challenge-3-single-pool-dex
              </a>
              <br />
              <br />
              Follow the README.md to complete the challenge. This challenge will help you
              build/understand a simple decentralized exchange, with one token-pair (ERC20 BALLOONS
              ($BAL) and ETH).
              <br />
              <br />
              This repo is an updated version of the{' '}
              <a
                href='https://medium.com/@austin_48503/%EF%B8%8F-minimum-viable-exchange-d84f30bd0c90'
                _target='blank'
              >
                original
              </a>
              and challenge repos before it. Please read the intro for a background on what we are
              building first! There is a `DEXTemplate.sol` file for your use if you want (rename it
              to `DEX.sol`). As well, this repo has solutions (👮🏻 try not to peak!) in it (in root
              directory, there's a solutions sub-directory) for now, but the challenge is to write
              the smart contracts yourself of course!
              <br />
              <br />
              ❗️ NOTE: functions outlined within the `DEXTemplate.sol` are what works with the
              frontend of this branch/repo. Also return variable names may need to be specified
              exactly as outlined within the `Solutions/DEX.sol` file. If you are confused, see
              solutions folder in this repo and/or cross reference with frontend code. There is also
              a{' '}
              <a
                href='https://www.youtube.com/watch?v=eP5w6Ger1EQ&t=364s&ab_channel=SimplyExplained'
                _target='blank'
              >
                Youtube
              </a>{' '}
              that may help you understand the concepts covered within this challenge.
            </>
          )}
        </div>
        {currentStep <= 5 && (
          <Button
            onClick={() => {
              if (currentStep === 3) {
                setEtherDeltaWindowVisibility(true)
              }
              if (currentStep === 4) {
                setEtherDeltaWindowVisibility(false)
              }
              if (currentStep === 5) {
                setContractWindowVisibility(true)
              }
              setCurrentStep(currentStep + 1)
            }}
          >
            Continue
          </Button>
        )}
        {currentStep > 5 && (
          <Button
            className='is-warning'
            onClick={() => {
              globalGameActions.dialog.continueDialog()
              setContractWindowVisibility(false)
              setExplanationWindowVisibility(false)
            }}
          >
            Done
          </Button>
        )}
      </div>
    </WindowModal>
  )
}

export default wrapGlobalGameData(ExplanationWindow)
