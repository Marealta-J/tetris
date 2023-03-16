let tetris = document.createElement('div'); 
tetris.classList.add('tetris');
// создан тег и его класс

for (let i = 1; i < 181; i++) {
    let excel = document.createElement('div');
    excel.classList.add('excel');
    tetris.appendChild(excel);
}
// цикл, в нем создан тег и класс, добавлены ячейки в tetris

let main = document.getElementsByClassName('main')[0];
main.appendChild(tetris);
// добавление ячеек в main

let excel =  document.getElementsByClassName('excel');
let i = 0;

for (let y = 18; y > 0; y--) {
    for (let x = 1; x < 11; x++)  {
        excel[i].setAttribute('posX', x);
        excel[i].setAttribute('posY', y);
        i++;
    }
}
//разметка ячеек

let x = 5; y = 15;
let mainArr = [
    //палка 3 ячейки вертикльная
    [
        [0, 1],
        [0, 2],
        [0, 3],
        //поворот на 90°
        [
            [-1, 0],
            [0, 0],
            [1, -1],
            [2, 2]
        ],
        //поворот на 180°
        [
            [1, -1],
            [0, 0],
            [-1, 1],
            [-2, 2]
        ],
        //поворот на 270°
        [
            [-1, 0],
            [0, 0],
            [1, -1],
            [2, 2]
        ],
        //поворот на 360°
        [
            [1, -1],
            [0, 0],
            [-1, 1],
            [-2, 2]
        ]
    ]
    // квадрат 4 ячейки
    [
        [1, 0],
        [0, 1],
        [1, 1],
        //поворот на 90°
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        //поворот на 180°
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        //поворот на 270°
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        //поворот на 360°
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    ],
    //L вправо
    [
        [1, 0],
        [0, 1],
        [0, 2],
        //поворот на 90°
        [
            [0, 0],
            [-1, 1],
            [1, 0],
            [2, -1]
        ],
        //поворот на 180°
        [
            [1, -1],
            [1, -1],
            [-1, 0],
            [-1, 0]
        ],
        //поворот на 270°
        [
            [-1, 0],
            [0, -1],
            [2, -2],
            [1, -1]
        ],
        //поворот на 360°
        [
            [0, -1],
            [0, -1],
            [-2, 0],
            [-2, 0]
        ]
    ],
    //L влево
    [
        [1, 0],
        [1, 1],
        [1, 2],
        //поворот на 90°
        [
            [0, 0],
            [0, 0],
            [-2, 1],
            [1, 0]
        ],
        //поворот на 180°
        [
            [2, 0],
            [0, 0],
            [1, -1],
            [1, -1]
        ],
        //поворот на 270°
        [
            [-2, 0],
            [1, -1],
            [0, 0],
            [-1, 1]
        ],
        //поворот на 360°
        [
            [0, -1],
            [0, -1],
            [-2, 0],
            [-2, 0]
        ]
    ],
    //T вниз
    [
        [1, 0],
        [2, 0],
        [1, 1],
        //поворот на 90°
        [
            [1, -1],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        //поворот на 180°
        [
            [0, 0],
            [-1, 0],
            [-1, 0],
            [1, -1]
        ],
        //поворот на 270°
        [
            [1, -1],
            [1, -1],
            [1, -1],
            [0, 0]
        ],
        //поворот на 360°
        [
            [-2, 0],
            [0, -1],
            [0, -1],
            [-1, -1]
        ]
    ],
    //z вправо 
    [
        [1, 0],
        [-1, 1],
        [0, 1],
         //поворот на 90°
        [
            [0, -1],
            [-1, 0],
            [2, -1],
            [1, 0]
        ],
        //поворот на 180°
        [
            [0, 0],
            [1, -1],
            [-2, 0],
            [-1, -1]
        ],
        //поворот на 270°
        [
            [0, -1],
            [-1, 0],
            [2, -1],
            [1, 0]
        ],
        //поворот на 360°
        [
            [0, 0],
            [1, -1],
            [-2, 0],
            [-1, -1]
        ]
    ],
    //z влево 
    [
        [1, 0],
        [1, 1],
        [2, 1],
         //поворот на 90°
        [
            [2, -1],
            [0, 0],
            [1, -1],
            [-1, 0]
        ],
        //поворот на 180°
        [
            [-2, 0],
            [0, -1],
            [-1, 0],
            [1, -1]
        ],
        //поворот на 270°
        [
            [2, -1],
            [0, 0],
            [1, -1],
            [-1, 0]
        ],
        //поворот на 360°
        [
            [-2, 0],
            [0, -1],
            [-1, 0],
            [1, -1]
        ]
    ],
]

let currentFigure = 0;
let figureBody = 0;
let rotate = 1;

//разметка и создание фигур
function create() {
    function getRandom() {
        return Math.round(Math.random() * (mainArr.length - 1))
    }

    rotate = 1;
    currentFigure = getRandom();

    figureBody = [
        document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
        document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`),
        document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
        document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`),
    ];

    for (let i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.add('figure');
    }
};
create();
// логика падения фигур
function move() {
    let moveFlag = true;
    let coordinates = [
        [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
        [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
        [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
        [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')]
    ];

    for (let i = 0; i < coordinates.length; i++) {
        if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1]-1}"]`).classList.contains('set')) {
            moveFlag = false;
            break;
        }
    }
    if (moveFlag) {
        for (let i = 0; i < figureBody.length; i++) {
            figureBody[i].classList.remove('figure');
        }
        figureBody = [
            document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1]-1}"]`),
            document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1]-1}"]`),
            document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1]-1}"]`),
            document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1]-1}"]`),
        ];
        for (let i = 0; i < figureBody.length; i++) {
            figureBody[i].classList.add('figure');
        }
    } else {
        for (let i = 0; i < figureBody.length; i++) {
            figureBody[i].classList.remove('figure');
            figureBody[i].classList.add('set');
        }
        create();
    }
}

let interval = setInterval(() => {
    move();
}, 300);

//реакция на клавиатуру
let flag = true;

window.addEventListener('keydown', function (e){
   let coordinates1 = [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')];
   let coordinates2 = [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')];
   let coordinates3 = [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')];
   let coordinates4 = [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')];

   function getNewsState(a) {
    flag = true;
    let figureNew = [
        document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${coordinates1[1]}"]`),
        document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${coordinates2[1]}"]`),
        document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${coordinates3[1]}"]`),
        document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${coordinates4[1]}"]`),
    ];
    for (let i = 0; i < figureNew.length; i++) {
        if (!figureNew[i] || figureNew[i].classList.contains('set')) {
            flag = false;
        }
    }
    if (flag == true) {
        for (let i = 0; i < figureBody.length; i++) {
            figureBody[i].classList.remove('figure');
        }
        figureBody = figureNew;
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.add('figure');
            }
    }
   }
   if (e.keyCode == 37) {
        getNewsState(-1);
    } else if (e.keyCode == 39) {
        getNewsState(1);
    } else if (e.keyCode == 40) {
        move()
    } else if (e.keyCode == 38) {
        flag = true;
        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0] + mainArr[currentFigure][rotate + 2][0][0]}"][posY = "${+coordinates1[1] + mainArr[currentFigure][rotate + 2][0][1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0] + mainArr[currentFigure][rotate + 2][1][0]}"][posY = "${+coordinates2[1] + mainArr[currentFigure][rotate + 2][1][1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0] + mainArr[currentFigure][rotate + 2][2][0]}"][posY = "${+coordinates3[1] + mainArr[currentFigure][rotate + 2][2][1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0] + mainArr[currentFigure][rotate + 2][3][0]}"][posY = "${+coordinates4[1] + mainArr[currentFigure][rotate + 2][3][1]}"]`),
        ];
        for (let i = 0; i < figureNew.length; i++) {
            if (!figureNew[i] || figureNew[i].classList.contains('set')) {
                flag = false;
            }
        }
        if (flag == true) {
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.remove('figure');
            }
            figureBody = figureNew;
                for (let i = 0; i < figureBody.length; i++) {
                    figureBody[i].classList.add('figure');
                }
                if (rotate < 4) {
                    rotate++;
                } else {
                    rotate = 1;
                }
        } 
    }
   
   
})



/* Всплывающее окно "Управление" */
function funcDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Закрытие окна при клике за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }