import React, { createContext, useContext, useMemo, useState } from 'react'
import { Step, Grid, Header } from 'semantic-ui-react'
import FirstComponent from './steps/step1/Step1'
import SecondComponent from './steps/step2/Step2'
import ThirdComponent from './steps/step3/Step3'
import "./home.scss"
export const StepperContext = createContext(null)
export const Steps = {
    First: 'First',
    Second: "Second",
    Third: 'Third'
}

const Components = {
    First: FirstComponent,
    Second: SecondComponent,
    Third: ThirdComponent
}

const Home = () => {

    const [activeStep, setActiveStep] = useState(Steps.First)

    const ActiveStep = Components[activeStep]

    const stepperContextValue = useMemo(() => ({ activeStep: activeStep, setActiveStep: setActiveStep }), [activeStep, setActiveStep])


    return (
        <>

            <Grid>
                <Grid.Column width={16}>
                    <Header as="h2">Company Profile Setup</Header>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Step.Group ordered className="customStepper">
                        <Step active={activeStep === Steps.First}>
                            <Step.Content>
                                <Step.Title>Business profile </Step.Title>
                            </Step.Content>
                        </Step>

                        <Step active={activeStep === Steps.Second}>
                            <Step.Content>
                                <Step.Title>Catalogue </Step.Title>
                            </Step.Content>
                        </Step>

                        <Step active={activeStep === Steps.Third}>
                            <Step.Content>
                                <Step.Title>Agreements</Step.Title>
                            </Step.Content>
                        </Step>
                    </Step.Group>
                </Grid.Column>
            </Grid>

            <StepperContext.Provider value={stepperContextValue} >
                <ActiveStep />
            </StepperContext.Provider>

        </>
    )
}

export default Home
