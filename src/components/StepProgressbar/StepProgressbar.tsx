import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectStep } from '../../features/slices/formSlice'
import { Steps } from '../../data/enums'

const MainContainer = styled.div`
  width: 100%;
  margin-bottom: 8rem;
  padding: 0;
`

interface StepContainerProps {
    width: string
}

const StepContainer = styled.div<StepContainerProps>`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  position: relative;
  :before {
    content: '';
    position: absolute;
    background: #E7E7E7;
    height: 0.6rem;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: '';
    position: absolute;
    background: #545AFA;
    height: 0.6rem;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

interface StepStyleProps {
    step: string
}

const StepStyle = styled.div<StepStyleProps>`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background-color: ${({ step }) =>
    step === 'completed' ? '#545AFA' : '#E7E7E7'};
  border: 0.3rem solid ${({ step }) =>
      step === 'completed' ? '#545AFA' : '#E7E7E7'};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepCount = styled.span`
  font-size: 1rem;
  color: #333;
`

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StepLabel = styled.span`
  font-size: 1.2rem;
  color: #545AFA;
  font-weight: bold;
`

const CheckMark = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #FFF;
`

const steps = [
  {
    label: '1',
    step: 1,
  },
  {
    label: '2',
    step: 2,
  },
  {
    label: '3',
    step: 3,
  }
]

export const StepProgressBar = () => {
  const step = useSelector(selectStep)
  let currentStep = 1

  if (step === Steps.One) currentStep = 1
  else if (step === Steps.Two) currentStep = 2
  else if (step === Steps.Three) currentStep = 3

  const totalSteps = steps.length

  const width = `${(100 / (totalSteps - 1)) * (currentStep - 1)}%`

  return (
    <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={currentStep >= step ? 'completed' : 'incomplete'}>
              {currentStep > step ? (
                <CheckMark>&#10003;</CheckMark>
              ) : (
                <StepCount></StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
    </MainContainer>
  )
}