// components/ModalWrapper.js
import React, { useEffect, useState } from 'react';
import { Modal } from './Modal';

const ModalWrapper = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return (
    <>
      {showModal && <Modal isOpen={showModal} onClose={onClose}>{children}</Modal>}
    </>
  );
};

export default ModalWrapper;