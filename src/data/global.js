export const global = {
  menu: {
    idle:-1,
    about: 0,
    works: 1,
    exhibition: 2,
    cv: 3,
    contact:4
  },
  worksMenu: {
    generativeArt:0,
    interactiveArt: 1,
    modeling: 2,
    software: 3,
  },
}

export const Data_Generative = {
  resourcePath: './images/works',
  words: '“This may sound paradoxical, but the machine, which is thought to be cold and inhuman, can help to realize what is most subjective, unattainable, and profound in a human being.” - Vera Molnar',
  contents: [
    {
      year:2017,
      thumbnailImage: 'soundVis_01',
      contentsImage: ['soundvis_01.JPG', 'soundvis_02.JPG' , 'soundvis_03.JPG'],
      title: 'Sound visualisation',
      subTitle: 'This project demonstrates how to convert sound into a physical object',
      descptionTitle:'a shape of \'Hello\' ',
      tool: 'Processing , Maya , Pakakura',
      description: 'The sound is the one of most sensory information for us to recognize what\'s going on the outside world. This audible information is mainly focused on our ears to perceive it. Hence, My question is that what happen if we could feel,see and touch this invisible energy. I mean how can our brain interpret the sound if the sound transformed into other medium. Does it help to listen to a sound? or it interrupts to enjoy listen to a sound? In order to do that, I used processing for sound analysis, Maya for build 3D object and laser cutter for cutting paper.'
    },
    {
      year:2018,
      thumbnailImage: 'shape_01',
      contentsImage: ['shape_01.png','shape_02.png','shape_03.png','shape_04.png'],
      title: 'Generative shapes',
      subTitle: 'This project is designed for the expression of name of people.',
      descptionTitle:'a shape of name ',
      tool: 'openFrameworks',
      description: 'This project is designed for the expression of name of people. As we have a unique name and it contains memories, identities, and joyful. Hence, I made a shape generator s/w by using Openframeworks. This s/w analysis people name and it generates very unique shapes related to the names. For instance, the first letter is the key value for the whole color scheme and rest of other letters effect on another visual effect.​'
    },
    {
      year:2020,
      thumbnailImage: 'ganerative_brush_01',
      contentsImage: ['ganerative_brush_01.jpg', 'ganerative_brush_02.jpg', 'ganerative_brush_03.jpg'],
      title: 'Beauty of randomness',
      subTitle: 'I am excited to create an algorithm for a brush and natural colour composition.',
      descptionTitle:'a beauty of randomness ',
      tool: 'processing',
      description: 'I am excited to create an algorithm for a brush and natural colour composition. It is always nice moment when I am waiting for that full rendering is done because there are beauty of randomness.​'
    },
    {
      year:2020,
      thumbnailImage: 'masterthesis_03',
      contentsImage: ['masterthesis_01.jpg', 'masterthesis_02.jpg', 'masterthesis_03.jpg' , 'masterthesis_04.jpg', 'masterthesis_05.jpg'],
      title: 'Seeing sound',
      subTitle: 'This project demonstrates the implementation of working software that integrates music emotion and musical characteristics such as frequency analysis.',
      tool: 'processing',
      descptionTitle:'can you see the music?',
      description: 'Music and visual artwork are a valuable part of our daily life. Since both media induce human emotion, this thesis demonstrates how to convert music into visual artwork such as generative art. Especially, the project shows the method of connecting music emotion to the theme of colour. This thesis describes the human emotional model based on arousal and valence. Also, this thesis explains how colour affects our emotion. In order to connect music emotion into the colour theme, this thesis shows the method to retrieve music information which includes arousal and valence of the music. In order to generate visual artwork from the music, this thesis demonstrates the implementation of working software that integrates music emotion and musical characteristics such as frequency analysis. Besides, this thesis presents how to apply generative artwork into our daily life products..​'
    },
    {
      year:2017,
      thumbnailImage: 'drawingmachine_02',
      contentsImage: ['drawingmachine_04.JPG', 'drawingmachine_01.JPG', 'drawingmachine_02.JPG' , 'drawingmachine_03.JPG','drawingmachine_05.JPG','drawingmachine_06.JPG'],
      title: 'Drawing machine',
      subTitle: 'Dawing machine expressed a morse code (ex:LOVE) as visual aspect.',
      tool: 'Arduino , Stepper motors , Sensors, Servo motors',
      descptionTitle:'.-.. --- ...- .',
      description: 'This project is designed for new type of drawing machine which can draw curves and lines naturally. Morse code is one of significant code to communicate each other. So, the drawing machine will express Some Morse code(ex:LOVE) as visual aspect.'
    },
  ]
}

export const Data_Interactive = {
  resourcePath: './images/works',
  contents: [
    {
      year:2018,
      thumbnailImage: 'aqua_08.JPG',
      contentsImage: ['aqua_08.JPG', 'aqua_01.jpg', 'aqua_02.jpg','aqua_04.JPG','aqua_09.JPG'],
      title: 'Digital aquarium',
      subTitle: 'Aquarium project for Helsinki children\'s hospital',
      descptionTitle : 'Interactive aquarium project for Helsinki children\'s hospital',
      tool: 'Unity 3D , Arduino , Fusion 360 , Maya',
      description: 'There was a project for Helsinki children\'s hospital. It was a student\'s volunteer project for the hospital. I was one of the team members which 4 people. We created an interactive art installation at the lobby of the hospital. Basically, kids could paint with there favorite color on the paper which already have a skeleton of a fish. Then they put the paper on the machine called "scanner" which I developed. Finally, when they push a button then the fish which they painted will become a digital fish in the digital aquarium. While I was doing with talented people together, it was the most impressive project experience because it helps kids to feel happy and excited.'
    },
    {
      year:2017,
      thumbnailImage: 'game_controller_01',
      contentsImage: ['game_controller_01.JPG'],
      title: 'Game controller',
      subTitle: 'what if the game controller becomes an uncomfortable thing to play the game?',
      descptionTitle:'shall we game?',
      tool: 'Arduino , Rotary sensors , Processing',
      description: 'The project name is “Game Together!” In modern society, the computer game has been growing hugely. Related in this industry, we can find many different types of a game controller such as a keyboard, Nintendo Wii, X-box controller etc. these controllers are well designed for one person to control their character in the game. It is handy and efficient. what happens if the game controller becomes an uncomfortable thing to play the game? what happens if only two people should co-work together to play a game? is it good for their relationship? or not?. Hence I designed a game controller which has a button and wheel on a box. So one controller only related in to move x-axis, and other is related in y-axis only. People should turn the wheels to move a character and archive the goal. I just want to give people new experience which is quite different than the conventional game controller.'
    },
    {
      year:2016,
      thumbnailImage: 'handtracking_01',
      contentsImage: ['handtracking_01.JPG'],
      title: 'Projection mapping',
      subTitle: 'What happens if I can control a light?',
      descptionTitle:'What if I can control the light?',
      tool: 'Processing , openCV , Kinect sensor',
      description: 'I created an interactive projection mapping system which could detect my palm position in 3D space. All the lights would rush to my palm like I am the center of the universe. In order to do that, I just used a projector and kinect sensor to detect the palm position.'
    },
  ]
}

export const Data_Modeling = {
  resourcePath: './images/works',
  contents: [
    {
      year:2016,
      thumbnailImage: 'aqua_08.JPG',
      contentsImage: ['3dmodeling_12.jpg', '3dmodeling_01.jpg', '3dmodeling_02.jpg', '3dmodeling_03.jpg', '3dmodeling_04.jpg',
        '3dmodeling_05.jpg', '3dmodeling_06.jpg', '3dmodeling_07.jpg', '3dmodeling_08.jpg', '3dmodeling_09.jpg', '3dmodeling_10.jpg',
        '3dmodeling_11.jpg','3dmodeling_13.jpg'],
      title: '3D Modeling',
      subTitle: 'Aquarium project for Helsinki children\'s hospital',
      descptionTitle : '3D modeling is one of my favorite hobbies',
      tool: 'Fusion 360',
      description: '3D modeling is one of my favorite hobbies'
    }
  ]
}

export const Data_Software = {
  resourcePath: './images/works',
  contents: [
    {
      year:'~ present',
      thumbnailImage: 'aqua_08.JPG',
      contentsImage: ['softwaredevelopment_04.jpg'],
      title: 'Software development',
      subTitle: 'Aquarium project for Helsinki children\'s hospital',
      descptionTitle : 'Software architecture design is similar to design a city',
      tool: 'UML, Visual studio, Xcode',
      description: '3D modeling is one of my favorite hobbies'
    },
    {
      year:'2010 ~ present',
      thumbnailImage: 'aqua_08.JPG',
      contentsImage: ['naturalsound_01.JPG'],
      title: 'Natural Sound',
      subTitle: 'Aquarium project for Helsinki children\'s hospital',
      descptionTitle : 'Introducing the NaturalSound.',
      tool: 'Xcode , Objective-C',
      description: 'Become part of nature while listening to nature in your busy everyday life anywhere and at any time. - This time the UI design has been reformed for simple and easy to use. - 100% purely a natural sound. - There is absolutely no advertisement. Reviews from all over the world. “ Sooooo clear calm beautiful I love it so much better than any other nature sounding app wow great job on finding natures song. “ “this app is one of a kind - actual sound recordings - very relaxing - thanks for creating it”'
    }
  ]
}

export const Data_WorksSubMenu = {
  contents: [
    {
      id:global.worksMenu.generativeArt,
      title: 'GENERATIVE  ART',
      titleImage:require('../data/images/thumbnail/thumbnail_ganerative_brush_01.png'),
      description: '“This may sound paradoxical, but the machine, which is thought to be cold and inhuman, can help to realize what is most subjective, unattainable, and profound in a human being.” - Vera Molnar',
      author: 'Vera Molnar',
      backgroundColor: '#bf8726',
      extraDescription: 'Processing openFrameworks Arduino'
    },
    {
      id:global.worksMenu.interactiveArt,
      title: 'INTERACTIVE ART',
      titleImage:require('../data/images/thumbnail/thumbnail_interactive_01.png'),
      description: '“If our child doesn’t have time to finish a fish before an appointment, it’s certain that we won’t be leaving the building before the fish is in the aquarium.” - from Helsinki’s New Children’s Hospital',
      author: 'Vera Molnar',
      backgroundColor: '#bfa126',
      extraDescription: 'Processing openFrameworks Arduino OpenCV Kinect sensor'
    },
    {
      id:global.worksMenu.modeling,
      title: '3D MODELING',
      titleImage:require('../data/images/thumbnail/thumbnail_3dmodeling_12.png'),
      description: '“Fusion 360 is my favorite 3D modeling tool.”',
      author: 'Vera Molnar',
      backgroundColor: '#bfba26',
      extraDescription: 'Fusion 360 Maya'
    },
    {
      id:global.worksMenu.software,
      title: 'SOFTWARE',
      titleImage:require('../data/images/thumbnail/thumbnail_software_01.png'),
      description: '“Software architecture design is similar to design a city.”',
      author: 'Vera Molnar',
      backgroundColor: '#abbf26',
      extraDescription: 'Objective-C Swift JavaScript React C C++ C# Node.js'
    }
  ],
  data: Data_Generative
}