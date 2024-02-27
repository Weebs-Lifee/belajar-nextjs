'use client';

interface viewUserButtonProps {
  userId: number
}


const ViewUserButton: React.FC<viewUserButtonProps> = ({userId}) => {
  const handleClick = () => alert(`user id: ${userId}`);
  return (
    <button onClick={handleClick}>Lihat User</button>
  )
}

export default ViewUserButton