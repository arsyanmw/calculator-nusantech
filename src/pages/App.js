import React, {useState} from 'react';
import {
    Row,
    Col,
    Card,
    Input,
    Checkbox,
    Radio,
    Divider
} from 'antd';
import './App.scss';

function App() {
    const [opt, setOpt] = useState('/');
    const [form, setForm] = useState({
        inpFirst: 10,
        inpSecond: 5,
        inpThird: 2
    })

    const [disable, setDisable] = useState({
        first: true,
        second: true,
        third: true
    });

    const inpDisable = (key) => {
        setDisable({
            ...disable,
            [key]: !disable[key]
        })
    }

    const validation = () => {
        const {first, second, third} = disable;
        const {inpFirst, inpSecond, inpThird} = form;
        let result;

        if(first && second && third) {
            if(opt === '+') {
                result = Number(inpFirst) + Number(inpSecond) + Number(inpThird);
            } else if(opt === '-') {
                result = Number(inpFirst) - Number(inpSecond) - Number(inpThird);
            } else if(opt === 'x') {
                result = Number(inpFirst) * Number(inpSecond) * Number(inpThird);
            } else if(opt === '/') {
                result = Number(inpFirst) / Number(inpSecond) / Number(inpThird);
            }
        } else if(first && second) {
            if(opt === '+') {
                result = Number(inpFirst) + Number(inpSecond);
            } else if(opt === '-') {
                result = Number(inpFirst) - Number(inpSecond);
            } else if(opt === 'x') {
                result = Number(inpFirst) * Number(inpSecond);
            } else if(opt === '/') {
                result = Number(inpFirst) / Number(inpSecond);
            }
        } else if(first && third) {
            if(opt === '+') {
                result = Number(inpFirst) + Number(inpThird);
            } else if(opt === '-') {
                result = Number(inpFirst) - Number(inpThird);
            } else if(opt === 'x') {
                result = Number(inpFirst) * Number(inpThird);
            } else if(opt === '/') {
                result = Number(inpFirst) / Number(inpThird);
            }
        } else if(second && third) {
            if(opt === '+') {
                result = Number(inpSecond) + Number(inpThird);
            } else if(opt === '-') {
                result = Number(inpSecond) - Number(inpThird);
            } else if(opt === 'x') {
                result = Number(inpSecond) * Number(inpThird);
            } else if(opt === '/') {
                result = Number(inpSecond) / Number(inpThird);
            }
        } else {
            alert('Input harus lebih dari 1');
        }

        return result;
    }

    return (
        <div className="appContainer">
            <Row>
                <Col span={24} align="middle">
                    <h1>TES FRONT END</h1>
                </Col>
                <Col span={24}>
                    <Card style={{width: '100%', borderRadius: '2%'}}>
                        <Row style={{width: '100%', marginBottom: 10}} justify="space-between" align="middle">
                            <Col span={20}>
                                <Input value={form.inpFirst} onChange={(e) => setForm({
                                    ...form,
                                    inpFirst: e.target.value
                                })} disabled={!disable.first} />
                            </Col>
                            <Col span={4} align="middle">
                                <Checkbox checked={disable.first} onChange={() => inpDisable('first')}/>
                            </Col>
                        </Row>
                        <Row style={{width: '100%', marginBottom: 10}} justify="space-between" align="middle">
                            <Col span={20}>
                                <Input value={form.inpSecond} onChange={(e) => setForm({
                                    ...form,
                                    inpSecond: e.target.value
                                })} disabled={!disable.second}/>
                            </Col>
                            <Col span={4} align="middle">
                                <Checkbox checked={disable.second} onChange={() => inpDisable('second')}/>
                            </Col>
                        </Row>
                        <Row style={{width: '100%'}} justify="space-between" align="middle">
                            <Col span={20}>
                                <Input value={form.inpThird} onChange={(e) => setForm({
                                    ...form,
                                    inpThird: e.target.value
                                })} disabled={!disable.third}/>
                            </Col>
                            <Col span={4} align="middle">
                                <Checkbox checked={disable.third} onChange={() => inpDisable('third')}/>
                            </Col>
                        </Row>

                        <Row style={{marginTop: 50}} justify="center">
                            <Col span={12} align="middle">
                                <Radio.Group size={"large"} defaultValue={opt}>
                                    <Radio.Button value="+" onClick={(e) => setOpt(e.target.value)} style={{marginRight: 10}}>+</Radio.Button>
                                    <Radio.Button value="-" onClick={(e) => setOpt(e.target.value)} style={{marginRight: 10}}>-</Radio.Button>
                                    <Radio.Button value="x" onClick={(e) => setOpt(e.target.value)} style={{marginRight: 10}}>x</Radio.Button>
                                    <Radio.Button value="/" onClick={(e) => setOpt(e.target.value)}>/</Radio.Button>
                                </Radio.Group>
                            </Col>
                        </Row>

                        <Divider/>

                        <Row justify="space-between">
                            <Col span={12}>
                                <h2>Hasil</h2>
                            </Col>
                            <Col span={12} align="end">
                                <h2>{validation()}</h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default App;
