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
    const putImage=(e,el)=>{
        const b = el
        const test = URL.createObjectURL(e.target.files[0] && e.target.files[0])
        console.log(e);
        setImages((prevState)=>{
            const a =prevState.map((el)=>{
                if(el===b){
                    el = test
                }
                return el
            })
            console.log(a);
            return a
        })
    }
  return (
    <ImagePickerStyle>
        {
          images.map((el)=>(
            <ContainerImage onMouseLeave={()=>setUrlImg("")} onMouseEnter={()=>{showContent(el)}}>
                <ImageStyle src={el} alt="" />
                {el===urlImg && <DivMouseEnter>
                    <button onClick={()=>{deleteImage(el)}}>del</button>
                    <label for="file-upload">изменить</label>
                    <input type='file' id='file-upload' onChange={(e)=>putImage(e,el)} />
                </DivMouseEnter>
                }
            </ContainerImage>
              ))
        }
        {images.length <3 && <WrapperLabelInput>
            <label className='addImg' htmlFor="img">+IMG</label>
            <input id='img' onChange={fileHandler} type="file" />
        </WrapperLabelInput>}
    </ImagePickerStyle>
  )
}

export default ImagePicker


const ImagePickerStyle = styled.div`
    gap: 30px;
    display: flex;
    width: 76%;
    margin: auto;
    
`
const ImageStyle = styled.img`
    width: 200px;
    height: 200px;
    
    `
const ContainerImage = styled.div`
    box-shadow: 0px 0px 4px 1px;
    position: relative;
  
    input[type="file"] {
        display: none;
    }
    label{
        background-color: #f6f4f4;
        border-radius: 6px;
        padding: 2px 6px 6px 6px;
        border: 1px solid grey;
    }
    `
const DivMouseEnter = styled.div`
    width: 80%;
    position: absolute;
    left: 16px;
    display: flex;
    justify-content: space-between;
    bottom: 20px;
`
const WrapperLabelInput=styled.div`
    width: 200px;
    height: 200px;
    border: 2px solid red;
    display: flex;
    align-items: center;
    justify-content: center;

    input[type="file"] {
        display: none;
    }
    .addImg{
        border: 2px solid grey;
        background-color: #ebe8e8;
        padding: 10px 4px;
        border-radius: 8px;
        cursor: pointer;
    }
`