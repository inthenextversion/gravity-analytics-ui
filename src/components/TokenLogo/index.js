import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils/index.js'
import EthereumLogo from '../../assets/eth.png'

const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

const StyledEthereumLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

export default function TokenLogo({ address, header = false, size = '30px', ...rest }) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <span {...rest} alt={''} style={{ fontSize: size }} role="img" aria-label="face">
          🤔
        </span>
      </Inline>
    )
  }

  // hard coded fixes for trust wallet api issues
  if (address?.toLowerCase() === '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb') {
    address = '0x42456d7084eacf4083f1140d3229471bba2949a8'
  }

  if (address?.toLowerCase() === '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f') {
    address = '0xc011a72400e58ecd99ee497cf89e3775d4bd732f'
  }

  if (address?.toLowerCase() === '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={EthereumLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x874e178a2f3f3f9d34db862453cd756e7eab0381') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={'https://assets.coingecko.com/coins/images/15871/small/GFI-Icon.png'}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x692597b009d13c4049a947cab2239b7d6517875f') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={'https://raw.githubusercontent.com/sushiswap/icons/master/token/ust.jpg'}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // if (address?.toLowerCase() === '0xbc7cb585346f4f59d07121bb9ed7358076243539') {
  //   return (
  //     <StyledEthereumLogo size={size} {...rest}>
  //       <img
  //         src={'https://gravityfinance.io/silver.png'}
  //         style={{
  //           boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
  //           borderRadius: '24px',
  //         }}
  //         alt=""
  //       />
  //     </StyledEthereumLogo>
  //   )
  // }

  if (address?.toLowerCase() === '0x13748d548d95d78a3c83fe3f32604b4796cffa23') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={'https://gravityfinance.io/kogecoin.png'}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x47536f17f4ff30e64a96a7555826b8f9e66ec468') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={'https://app.beluga.fi/static/media/logo.70f9bd57.png'}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png'}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  const path = `https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/${isAddress(
    address
  )}/logo.png`

  // const path = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
  //   address
  // )}/logo.png`

  return (
    <Inline>
      <Image
        {...rest}
        alt={''}
        src={path}
        size={size}
        onError={(event) => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
