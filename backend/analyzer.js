function codeAnalyzer(code){
    const lines = code.split("\n");
    const warnings = [];
    const poorNames = ["a", "b", "x", "y", "i", "j"];


    lines.forEach(line => {
        const cleanLine = line.trim();
        let variableName;

        if(cleanLine.startsWith("let") || cleanLine.startsWith("const")){
        if(cleanLine.startsWith("let")){
             variableName = cleanLine.split("=")[0].replace("let","").trim();
        }else{
            variableName = cleanLine.split("=")[0].replace("const","").trim();
        }

                    //first rule
            //check if variable name was reassigned
            if(cleanLine.startsWith("let")){
            const neverReassigned = lines.every((line)=>{
                return line.indexOf(variableName + "++") === -1 
                && line.indexOf(variableName + "--") === -1
            })

            if(neverReassigned){
                warnings.push(`${variableName} is declared with let but could be const`);
            }} 
        
            //second rule
            
        if(poorNames.includes(variableName)){
                warnings.push(`${variableName} is not a descriptive variable name. Consider using a more meaningful name.`);
            }
        
        }  
    });

    return warnings;

}

module.exports = codeAnalyzer;