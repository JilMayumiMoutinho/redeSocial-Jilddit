import React from 'react'
import LoadingImg from '../../assets/img/loading.gif'
import { LoadingContainer, LoadingImgStyle, PLoading } from './styled'

const Loading = () => {
  return (
    <LoadingContainer>
      <PLoading>Loading</PLoading>
      <LoadingImgStyle src={LoadingImg} alt='logovirando'/>
    </LoadingContainer>
  )
}

export default Loading;