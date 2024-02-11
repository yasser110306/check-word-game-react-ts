function Try({ tryNum }: { tryNum: number }): JSX.Element {
    return (
        <div className="try" data-tryNum={tryNum}>
            <p>try{tryNum}</p>
            <div className="inputs">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
        </div>
    );
}

export default Try;
