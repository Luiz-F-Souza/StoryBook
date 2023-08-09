import { Label, MultStepContainer, Step, Steps } from "./styles"


export interface MultStepProps {
  size: number,
  currentStep?: number
}

export const MultStep = ({size, currentStep = 1}: MultStepProps) => {

  return(
    <MultStepContainer>
      <Label>Passo {currentStep} de {size}</Label>
      <Steps css={{"--steps-size":size}}>
        {Array.from({length: 4}, (_, i) => i + 1).map(step => {
          return <Step key={step} active={currentStep >= step}/>
        })}
      </Steps>
    </MultStepContainer>
  )
}

MultStep.displayName = "MultStep"