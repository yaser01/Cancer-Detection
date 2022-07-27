import React, { useRef, useState } from "react";
import styled from "styled-components";
import Timer from "../Timer";
import {InfoContainer,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,ColonCancerDetectorContainer,DetectorContainer,TargetImg,HiddenFileInput,SelectButton,TargetBox,UploadButtonText,Row,Row2,Result,ResultBox,LoadingGrey,WindMillDots}from "./ColonCancerDetector"
import axios from "axios";
export default function ColonCancerDetector(props) {
  const fileInputRef = useRef();
  const imageRef = useRef();
  const [imgData, setImgData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [ResultString, setResult] = useState(" ");
  const [GoodResult, setGoodResult] = useState(false);
  

  const isEmptyPredictions = !predictions || predictions.length === 0;

  const openFilePicker = () => {
    if (fileInputRef.current && !isLoading) fileInputRef.current.click();
  };
  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rj(fileReader.error);
      fileReader.readAsDataURL(file);
    });
  };

  const onSelectImage = async (e) => {
    setPredictions([]);
    setLoading(true);
    try {
    const file = e.target.files[0];
    const imgData = await readImage(file);
    setImgData(imgData); 
    const imageElement = document.createElement("img");
    imageElement.src = imgData;
    imageElement.onload = async () => {
      const imgSize = {
        width: imageElement.width,
        height: imageElement.height,
      };
    };
    console.log(imgData)
    const fd=new FormData()
    fd.append('image',file,file.name);
    fd.append('name',"Colon");
    console.log(fd);
    console.log("Requesest Sent");
    axios.post("http://final5year.herokuapp.com/upload/",fd).then(
      res=>{
        setFinished(true);
        console.log(res.data.message);
        if(res.data.message=="colon_aca")
           {setResult("Colon Adenocarcinoma");
           setGoodResult(false);
      }
        else if (res.data.message=="colon_n")
           {setResult("Colon Normal");
           setGoodResult(true);
      }
    
        else
           {setResult("Unknown");
           setGoodResult(false);
  }

        setLoading(false);
      }
    );
    }
    catch(error) {
      console.log({ error })
      return;
  }
    
   
  };

  return (

    <>

          <InfoContainer >
           <InfoWrapper>
              <InfoRow  > 
               <Column1>
                <TextWrapper>
                    <Heading  >Colon Cancer Detection</Heading>
                    
                    <Row>
                    <SelectButton onClick={openFilePicker} >
           <UploadButtonText className={`container${isLoading? ' loading' : ''}`}>{isLoading ? "Diagnosing ..." : "Select Image"}</UploadButtonText>
         </SelectButton>
         <Timer shown={isLoading}></Timer></Row>
         <Row2><ResultBox>Result:</ResultBox><Result shown={!isLoading && isFinished} goodresult={GoodResult}>{ResultString}</Result></Row2>
                </TextWrapper>
               </Column1>
               <Column2>
               <>
                <ColonCancerDetectorContainer>
      
         <DetectorContainer>
           {imgData && <TargetImg src={imgData} ref={imageRef} ></TargetImg>}
           <LoadingGrey shown={isLoading}><WindMillDots></WindMillDots></LoadingGrey>
            
           {!isEmptyPredictions &&
            predictions.map((prediction, idx) => (
              <TargetBox
                key={idx}
                x={prediction.bbox[0]}
                y={prediction.bbox[1]}
                width={prediction.bbox[2]}
                height={prediction.bbox[3]}
                classType={prediction.class}
                score={prediction.score * 100}
              />
            ))}
        </DetectorContainer>
        
        <HiddenFileInput
          type="file"
          ref={fileInputRef}
          onChange={onSelectImage}
        />
       </ColonCancerDetectorContainer>
               </>
               </Column2>
               </InfoRow>
               </InfoWrapper>    
          </InfoContainer> 
        </>

  );
}
    // <>
    // <ColonCancerDetectorContainer>
      
    //   <SelectButton onClick={openFilePicker}>
    //     {isLoading ? "Recognizing..." : "Select Image"}
    //   </SelectButton>
    //   <DetectorContainer>
    //     {imgData && <TargetImg src={imgData} ref={imageRef} />}
    //     {!isEmptyPredictions &&
    //       predictions.map((prediction, idx) => (
    //         <TargetBox
    //           key={idx}
    //           x={prediction.bbox[0]}
    //           y={prediction.bbox[1]}
    //           width={prediction.bbox[2]}
    //           height={prediction.bbox[3]}
    //           classType={prediction.class}
    //           score={prediction.score * 100}
    //         />
    //       ))}
    //   </DetectorContainer>
      
    //   <HiddenFileInput
    //     type="file"
    //     ref={fileInputRef}
    //     onChange={onSelectImage}
    //   />
    // </ColonCancerDetectorContainer>
    //   </>