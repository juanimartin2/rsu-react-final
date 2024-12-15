type ImageProps = {
    src: string,
    alt: string,
    height: number,
    width: number
  }

const Image = ( {src, alt, height, width } : ImageProps ) => {
  return (
    <img src={src} alt={alt} height={height} width={width}/>
  )
}

export default Image