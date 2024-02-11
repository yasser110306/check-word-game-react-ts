function Try({ trynum }: { trynum: string }): JSX.Element {
    return (
        <div className="try" data-trynum={trynum}>
            <p>try{trynum}</p>
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
