const solveFirstDegreeEquation = (a, b) => {
    if (a == 0) {
        if (b == 0) {
            return "Phương trình có vô số nghiệm!";
        } else {
            return "Phương trình vô nghiệm!";
        }
    } else {
        return `Phương trình có nghiệm là x=: ${-b/a}`;
    }
};

console.log(solveFirstDegreeEquation(5, 8));