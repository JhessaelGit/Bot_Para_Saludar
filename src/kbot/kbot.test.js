import kbot from "./kbot"

describe("saludador",()=> {
    it("deberia saludar en ingles a Jhessa joven",()=>{
        expect(kbot("Jhessa","m",23,"en")).toEqual("Hello Young Man Jhessa");
    })
})

describe("saludador",()=> {
    it("deberia saludar en ingles a Jhessa mayor",()=>{
        expect(kbot("Jhessa","m",31,"en")).toEqual("Hello Sir Jhessa");
    })
})

describe("saludador",()=> {
    it("deberia saludar en ingles a Maria joven",()=>{
        expect(kbot("Maria","f",23,"en")).toEqual("Hello Miss Maria");
    })
})

describe("saludador",()=> {
    it("deberia saludar en ingles a Maria mayor",()=>{
        expect(kbot("Maria","f",31,"en")).toEqual("Hello Madam Maria");
    })
})

describe("saludador",()=> {
    it("deberia saludar en español a Jhessa joven",()=>{
        expect(kbot("Jhessa","m",23,"es")).toEqual("Hola Joven Jhessa");
    })
})

describe("saludador",()=> {
    it("deberia saludar en español a Jhessa mayor",()=>{
        expect(kbot("Jhessa","m",31,"es")).toEqual("Hola Señor Jhessa");
    })
})

describe("saludador",()=> {
    it("deberia saludar en español a Maria joven",()=>{
        expect(kbot("Maria","f",23,"es")).toEqual("Hola Señorita Maria");
    })
})

describe("saludador",()=> {
    it("deberia saludar en español a Maria mayor",()=>{
        expect(kbot("Maria","f",31,"es")).toEqual("Hola Señora Maria");
    })
})