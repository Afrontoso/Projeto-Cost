import { useState, useEffect } from 'react';

import styles from './Message.module.css';

function Message({ mensagem, type }) {

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!mensagem) {

      setVisible(false)
      return;
    }
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  },
    [mensagem])

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{mensagem}</div>
      )}
    </>

  );

} export default Message;