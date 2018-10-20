import React, { Component } from 'react'

import { Button, notification } from 'antd'
import { css } from 'emotion'
import { inject, observer } from 'mobx-react'

const openNotificationWithIcon = (type) => {
    notification[type]({
        message: 'Sweet sweet ant desing'
    })
}

@inject('RootStore')
@observer
export class Page extends Component<any, any> {
    public componentDidMount() {
        openNotificationWithIcon('info')
    }
    public render() {

        return (
            <div className={css(`padding: 12rem`)}>
                <h1>HALTR</h1>

                <div className={'bg-blue-dark text-white p-4 mt-4'}>
                    <p>
                     D O N E Z O
                    </p>
                </div>
            </div>
        )
    }
}
