import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let [title, setTitle] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬독학']);
    let [thumbs, setThumbs] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [currentTitle, setCurrentTitle] = useState('');
    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ color: 'red', fontSize: '1rem' }}>React Blog</h4>
            </div>
            <button onClick={() => {
                let copy = [...title];
                copy.sort();
                setTitle(copy);
            }}>가나다순</button>

            <button onClick={() => {
                let copy = [...title]
                copy[0] = '여자코트 추천';
                console.log(title == copy)
                setTitle(copy)
            }}>글 수정</button>

            {
                title.map((val, idx) => {
                    return (
                        <div className="list">
                            <h4 onClick={() => { setModal(!modal); setCurrentTitle(idx)}}>{title[idx]} <span onClick={() => {
                                let copy = thumbs;
                                copy[idx] = copy[idx] + 1;
                                setThumbs(copy);
                            }}>👍 {thumbs[idx]}</span></h4>
                            <p>7월 29일 발행</p>
                        </div>
                    )
                })
            }
            {
                modal == true ? <Modal title={title} currentTitle={currentTitle}/> : false
            }
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.title[props.currentTitle]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글 수정</button>
        </div>
    )
}


export default App;
