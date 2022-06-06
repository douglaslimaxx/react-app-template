import React from 'react'
import styles from './styles.css'

const LastVisited = () => {

  const products = [1,2,3, 4, 5]
  return <div>
            <h3>Last Visited</h3>
            <div className={styles.lastVisitedContainer}>
              {products.map(() => {
                return <img className='last-visited-img'src='https://upload.wikimedia.org/wikipedia/pt/d/d2/Born_This_Way.jpg'/>
              })}
            </div>
         </div>
}

export default LastVisited
