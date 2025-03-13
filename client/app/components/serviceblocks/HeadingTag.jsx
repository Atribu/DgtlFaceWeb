function HeadingTag({ children, tag: Tag = "span", className, id: id, ...props }) {
  if (Tag == null) {
    Tag = "span";
  }
  
  return (
    <Tag className={className} {...props} id={`${id}`}>
      {children}
    </Tag>
  );
}

export default HeadingTag;
