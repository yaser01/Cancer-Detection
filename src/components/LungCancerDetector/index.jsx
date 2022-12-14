import React, { useRef, useState } from "react";
import styled from "styled-components";
import Timer from "../Timer";
import {InfoContainer,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,LungCancerDetectorContainer,DetectorContainer,TargetImg,HiddenFileInput,SelectButton,TargetBox,UploadButtonText,Row,Row2,Result,ResultBox,LoadingGrey,WindMillDots}from "./LungCancerDetector"
import axios from "axios";
import sample_image from '../../image/sample.jpg';
export default function LungCancerDetector(props) {
  const fileInputRef = useRef();
  const imageRef = useRef();
  const [imgData, setImgData] = useState(sample_image);
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
    setLoading(true);
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
    fd.append('name',"Lung");
    console.log(fd);
    console.log("Requesest Sent");
    axios.post("https://final5year.herokuapp.com/upload/",fd).then(
      res=>{
        setFinished(true);
        console.log(res.data.message);
        if(res.data.message=="lung_aca")
           {setResult("Lung Adenocarcinoma");
           setGoodResult(false);
      }
        else if (res.data.message=="lung_n")
           {setResult("Lung Normal");
           setGoodResult(true);
      }
      else if (res.data.message=="lung_scc")
           {setResult("Lung Squamous Cell Carcinoma");
           setGoodResult(false);
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
                    <Heading  >Lung Cancer Detection</Heading>
                    
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
                <LungCancerDetectorContainer>
      
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
       </LungCancerDetectorContainer>
               </>
               </Column2>
               </InfoRow>
               </InfoWrapper>    
          </InfoContainer> 
        </>

  );
}
    // <>
    // <LungCancerDetectorContainer>
      
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
    // </LungCancerDetectorContainer>
    //   </>