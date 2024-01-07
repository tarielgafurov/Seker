import React, { useState } from 'react'
import styled from 'styled-components'

const ImagePicker = () => {
    const [images,setImages] = useState([])
    const [urlImg, setUrlImg] = useState("")

    const fileHandler=(e)=>{
        console.log(e.target);
        const test = URL.createObjectURL(e.target.files[0] && e.target.files[0])
        setImages((prevState)=>[...prevState, test])
    }

    const showContent=(e)=>{
        console.log(e);
        console.log("Mouse");
        setUrlImg(e)
    }

    const deleteImage=(img)=>{
        setImages((prevState)=>{
            const filter = prevState.filter((el)=>el!==img)
            return filter
        })
    }
  return (
    <ImagePickerStyle>
        {
          images.map((el)=>(
            <div onMouseLeave={()=>setUrlImg("")} onMouseEnter={()=>{showContent(el)}}>
                <ImageStyle src={el} alt="" />
                {el===urlImg && <button onClick={()=>{deleteImage(el)}}>del</button>}
            </div>
              ))
        }
        {images.length <3 && <input onChange={fileHandler} type="file" />}
    </ImagePickerStyle>
  )
}

export default ImagePicker


const ImagePickerStyle = styled.div`
    border: 1px solid;
    display: flex;

    div{
        border: 1px solid red;
    }
    input{
        width: 100px;
        border: 2px solid;

    }
`
const ImageStyle = styled.img`
    width: 160px;
`