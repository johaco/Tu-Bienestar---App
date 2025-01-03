const Section = ({ title, description, children }) => {
    return (
        <div className="section">
            <h3>{title}</h3>
            <p>{description}</p>
            {children}
        </div>
    );
};

export default Section;