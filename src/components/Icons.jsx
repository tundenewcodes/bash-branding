const Icons = ({ Icon, link, style, width, height,color }) => {
  return (
    <a target="_blank" href={link} rel="noreferrer noopener">
      <Icon
        style={{
          background: "transparent",
          minHeight: height ,
          height: height ,
          width: width ,
          color: color,
          cursor: "pointer",
          ...style,
        }}
      />
    </a>
  );
};

export default Icons;
