//-------------------------------------------------------------------
const init = () => {
    const student = {
        vardas: "Tomas",
        pavarde: "Tomauskas",
        kurMokosi: "KTU",
        kursas: 4,
        pazymiai: [5, 7, 8, 10, 4, 8, 5],
    }

    const student2 = {
        vardas: "Jonas",
        pavarde: "Jonaitis",
        kurMokosi: "VDU",
        kursas: 2,
        pazymiai: [6, 8, 9],
    }

    const student3 = {
        vardas: "Petras",
        pavarde: "Petraitis",
        kurMokosi: "KKU",
        kursas: 3,
        pazymiai: [6, 7, 6],
    }

    const student4 = {
        vardas: "Domas",
        pavarde: "Petrulis",
        kurMokosi: "VDU",
        kursas: 2,
        pazymiai: [6, 7, 8],
    }

    const student5 = {
        vardas: "Simas",
        pavarde: "Simaitis",
        kurMokosi: "VU",
        kursas: 1,
        pazymiai: [5, 8, 8],
    }
    //----------------------- 2 uzduotis --------------------------------------------//

    const getInfo = ({vardas, pavarde, kurMokosi, kursas, pazymiai}) => {
        return `${vardas} ${pavarde} mokosi ${kurMokosi}, ${kursas} kurse, jo pazymiai: [${pazymiai.join(", ")}]`
    }
    const result2 = getInfo(student)
    print("result-2", result2)

    //----------------------- 3 uzduotis --------------------------------------------//

    const getTypeOf = (student) => {
        const res = []
        for (let name in student) {
            res.push(`Parametro '${name}' tipas yra '${typeof student[name]}'`)
        }
        return res
    }
    const result3 = getTypeOf(student)
    printArr("result-3", result3)

    //----------------------- 4 uzduotis --------------------------------------------//

    print("result-4", student)

    //----------------------- 5 uzduotis --------------------------------------------//

    const result5 = [student, student2, student3, student4, student5]
    printArr("result-5", result5)

    //----------------------- 6 uzduotis --------------------------------------------//

    print("result-6", result5[4])

    //----------------------- 7 uzduotis --------------------------------------------//

    const result7a = `${student.vardas} ${student.pavarde} mokosi ${student.kurMokosi}, ${student.kursas} kurse, jo pazymiai: [${student.pazymiai.join(", ")}]`
    const result7b = `${student["vardas"]} ${student["pavarde"]} mokosi ${student["kurMokosi"]}, ${student["kursas"]} kurse, jo pazymiai: [${student["pazymiai"].join(", ")}]`

    printArr("result-7", [result7a, result7b])

    //----------------------- 8 uzduotis --------------------------------------------//

    const printPazymiai = (student) => {
        console.log("Uzduotis 8")
        for (let i = 0; i < student.pazymiai.length; i++) {
            console.log("pazymis", student.pazymiai[i])
        }
    }
    printPazymiai(student4)

    //----------------------- 9 uzduotis --------------------------------------------//

    const pakeltiPazymius = ({pazymiai}, kuriuos) => {
        const naujiPazymiai = [...pazymiai]

        kuriuos.forEach((num) => {
            if (naujiPazymiai[num] < 10) {
                naujiPazymiai[num] = naujiPazymiai[num] + 1
            }
        })

        return {...student, pazymiai: naujiPazymiai}
    }

    const result9 = pakeltiPazymius(student, [1, 3, 0])

    print("result-9", result9)

    //----------------------- 10 uzduotis --------------------------------------------//

    const getSum = ({pazymiai}, kuriuos) => {
        let sum = 0

        kuriuos.forEach((num) => {
            sum += pazymiai[num]
        })

        return sum
    }

    const result10 = getSum(student, [1, 3, 0])
    print("result-10", result10)

    //----------------------- 11 uzduotis --------------------------------------------//

    const getSandauga = ({pazymiai}, kuriuos) => {
        let sandauga = 1

        kuriuos.forEach((num) => {
            sandauga = sandauga * pazymiai[num]
        })

        return sandauga
    }

    const result11 = getSandauga(student, [1, 3])
    print("result-11", result11)

    //----------------------- 12 uzduotis --------------------------------------------//
    const isKursasNumber = ({kursas}) => {
        return typeof kursas === "number"
    }

    const result12 = isKursasNumber(student)
    print("result-12", result12)

    //----------------------- 13 uzduotis --------------------------------------------//

    const isKetvirtameKurse = ({kursas}) => {
        return kursas === 4
    }

    const result13 = isKetvirtameKurse(student)
    print("result-13", result13)

    //----------------------- 14 uzduotis --------------------------------------------//

    const getStatus = (student) => {
        const isAbiturientas = isKetvirtameKurse(student)

        if (isAbiturientas) {
            return `${student.vardas} ${student.pavarde} yra abiturientas`
        }

        return `${student.vardas} ${student.pavarde} dar toli iki mokslų baigimo`
    }

    const getAllStundentsStatus = (allStudents) => {
        return allStudents.map((st) => getStatus(st))
    }

    const allStudents = result5
    const result14 = getAllStundentsStatus(allStudents)
    printArr("result-14", result14)

    //----------------------- 15 uzduotis --------------------------------------------//

    const suma = (a, b) => {
        return a + b
    }

    const result15 = suma(3, 5)
    print("result-15", result15)

    //----------------------- 16 uzduotis --------------------------------------------//

    const rangeSum = (from, to) => {
        let sum = 0

        for (let i = from; i <= to; i++) {
            sum = suma(sum, i)
        }

        return sum
    }

    const result16 = rangeSum(1, 100)
    print("result-16", result16)

    //----------------------- 17 uzduotis --------------------------------------------//

    const sudeti = (nums, type) => {
        let sum = 0
        const lyginisNelyginis = type === "even" ? 0 : 1

        nums.forEach((num) => {
            if (num % 2 === lyginisNelyginis) {
                sum = suma(sum, num)
            }
        })

        return sum
    }

    const a = [1, 3, 6, 5, 7, 2, 2, 4, 4, 8]

    const result17even = sudeti(a, "even")
    const result17odd = sudeti(a, "odd")
    printArr("result-17", [result17even + " - even", result17odd + " - odd"])

    //----------------------- 18 uzduotis --------------------------------------------//

    const sudetiByIndex = (nums, type) => {
        let sum = 0
        const lyginisNelyginis = type === "even" ? 0 : 1

        nums.forEach((num, i) => {
            if (i % 2 === lyginisNelyginis) {
                sum = suma(sum, num)
            }
        })

        return sum
    }

    const result18even = sudetiByIndex(a, "even")
    const result18odd = sudetiByIndex(a, "odd")
    printArr("result-18", [result18even + " - even", result18odd + " - odd"])

    //----------------------- 19 uzduotis --------------------------------------------//
    const getRandomNumber = (limit = 100) => {
        return Math.floor(Math.random() * limit)
    }

    const getRandomNumbers = (kiekis) => {
        const masyvas = []
        for (let i = 0; i < kiekis; i++) {
            const randomNumber = getRandomNumber()
            masyvas.push(randomNumber)
        }
        return masyvas
    }

    const result19 = getRandomNumbers(5)
    print("result-19", result19)

    //----------------------- 20 uzduotis --------------------------------------------//

    const getRandomLetters = (kiekis) => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        const masyvas = []
        for (let i = 0; i < kiekis; i++) {
            const randomNumber = getRandomNumber(letters.length)
            const randomLetter = letters[randomNumber]

            masyvas.push(randomLetter)
        }
        return masyvas
    }

    const result20 = getRandomLetters(15)
    print("result-20", result20)

    //----------------------- 21 uzduotis --------------------------------------------//

    const inputElement = (result) => {
        const input = document.getElementById("input-21")
        input.value = result
    }

    inputElement(result2)

    //----------------------- 22 uzduotis --------------------------------------------//

    const getArr = () => {
        const {value} = document.getElementById("input-22")
        const arr = JSON.parse(value)
        return arr
    }

    const bindButton = () => {
        const button = document.getElementById("button-22")
        button.onclick = () => {
            try {
                const arr = getArr()
                const result22 = sudeti(arr, "even")
                print("result-22", result22)
            } catch (error) {
                print("result-22", error.message)
            }
        }
    }

    bindButton()

    //======================================================================================
}

//----------------------- --------------------------------------------//
const print = (id, result) => {
    console.group(id)
    console.log(result)
    console.groupEnd(id)
    document.getElementById(id).innerHTML = JSON.stringify(result)
}

const printArr = (id, result) => {
    console.group(id)
    console.log(result)
    console.groupEnd(id)
    document.getElementById(id).innerHTML = "<ul><li>" + result.map((st) => JSON.stringify(st)).join("</li><li>") + "</li></ul>"
}

init()
