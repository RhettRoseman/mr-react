import React from "react";

export default function Services() {

    return
    <div>
        <div><CCard style={{ width: '18rem' }}>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
                <CCardTitle>Simple Site</CCardTitle>
                <CCardText>
                    125.00/hr
                </CCardText>
                <CButton href="#">Go somewhere</CButton>
            </CCardBody>
        </CCard>
        </div>
        <div>
            <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                        250.00/hr
                    </CCardText>
                    <CButton href="#">Go somewhere</CButton>
                </CCardBody>
            </CCard>
        </div>
        <div>
            <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                        400.00/hr
                    </CCardText>
                    <CButton href="#">Go somewhere</CButton>
                </CCardBody>
            </CCard>
        </div>
    </div>
}