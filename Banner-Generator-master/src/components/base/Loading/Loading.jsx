import React from 'react'
import styles from './Loading.module.scss'
import Icon from '@ant-design/icons'

const Loading = ({ show }) => (
  <>
    {show && (
      <div className={styles['loading']}>
        <Icon type='loading' />
        <span className={styles['loading__text']}>loading...</span>
      </div>
    )}
  </>
)

export default Loading
