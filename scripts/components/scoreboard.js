export const userInfo = []

export function getUserInfo() {
    const place = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th']

    // taking data from localStorage and adding it to this program
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let value = localStorage.getItem(key)

            userInfo.push({ name: `${key}`, score: parseInt(value) })
        }
    }

    // selection sort algorithm to organize the data and rank each user by lowest score
    let min;
    for (let i = 0; i < userInfo.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < userInfo.length; j++) {
            if (userInfo[j].score < userInfo[min].score)
                min = j;
        }

        let temp;
        temp = userInfo[min];
        userInfo[min] = userInfo[i];
        userInfo[i] = temp;
    }

    const tableBody = document.getElementById('table-body')
    tableBody.innerHTML = ''

    // adding the info to the High Score menu
    // add at tied condition here
    let max = userInfo.length === 10 ? 10 : userInfo.length


    for (let i = 0; i < max; i++) {
        const tr = document.createElement('tr')
        const td = document.createElement('td')

        let addThis = `<tr>
        <td>${place[i]}</td>
        <td>${userInfo[i].name}</td>
        <td>${userInfo[i].score}</td>
        </tr>`

        // <td></td> need to add this as the last column for the data when I finally add that

        tableBody.innerHTML += addThis
    }
}