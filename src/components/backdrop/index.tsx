type Props = {
  backDrop: boolean;
  onClick: () => void;
};

const BackDrop = ({ backDrop, onClick }: Props) => {
  return (
    <>
      {backDrop && (
        <div
          onClick={onClick}
          className="w-full h-full absolute z-40 bg-gray-600 opacity-60"
        />
      )}
    </>
  );
};

export default BackDrop;
