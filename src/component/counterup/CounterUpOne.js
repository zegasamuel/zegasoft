import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import CounterUp from '../../component/counterup/CounterUp';


const CounterUpOne = () => {
    return (
        <div className="section section-padding bg-color-dark">
            <div className="container">
            <SectionTitle 
                    subtitle="Featured Case Study"
                    title="Design transformation movement"
                    description="We help customers connect to the world by transforming into digital."
                    textAlignment="heading-light"
                    textColor=""
                />
                <div style={{placeContent: 'center'}} className="row">
                    <CounterUp colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
                </div>
            </div>
        </div>
    )
}


export default CounterUpOne;