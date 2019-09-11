import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
export class Remen extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay>
                    <div>
                        <img src="http://img0.imgtn.bdimg.com/it/u=1455193691,2421416359&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://img1.99114.com/group1/M00/22/DB/wKgGS1kCrCeAJcd6AATK6sTLesk262.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://img1.imgtn.bdimg.com/it/u=1074786731,3210947204&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://img2.imgtn.bdimg.com/it/u=4250676577,3806013023&fm=26&gp=0.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Remen;
