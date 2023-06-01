const TitleForm = () => {
    return (
        <div className="w-25 p-3 bg-success-subtle border border-black rounded">
            <h3>Which describes you best?</h3>
            <div className="homeOwner">
                <svg
                    className="home"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17 15H19V17H17V15ZM17 11H19V13H17V11ZM17 7H19V9H17V7ZM13.74 7L15 7.84V7H13.74Z"
                        fill="#757575"
                    />
                    <path
                        d="M10 3V4.51L12 5.84V5H21V19H17V21H23V3H10Z"
                        fill="#757575"
                    />
                    <path
                        d="M8.17 5.7L15 10.25V21H1V10.48L8.17 5.7ZM10 19H13V11.16L8.17 8.09L3 11.38V19H6V13H10V19Z"
                        fill="#757575"
                    />
                </svg>
                <span>Homeowner</span>
                <p>I am a homeowner or interesed in home design.</p>
            </div>
        </div>
    );
};

export default TitleForm;
