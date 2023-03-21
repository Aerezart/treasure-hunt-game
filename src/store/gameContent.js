import { useDispatch } from 'react-redux';
import { gameActions } from './gameSlice';



export const gameContent = [
    {
        id:1,
        type: 'empty',
        description: 'Let\'s start our journey!'
    },
    {
        id:2,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:3,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue',
        questionType: 'text',
        question: 'What has a heart that doesn\'t beat, a mouth that doesn\'t speak, and a golden head?',
        options: [
            {
                optionText: 'A statue',
                isCorrect: true
            },
            {
                optionText: 'A crown',
                isCorrect: false
            },
            {
                optionText: 'A key',
                isCorrect: false
            },
            {
                optionText: 'A mirror',
                isCorrect: false
            }
        ],
        ifFalseGoBackBy: 2
    },
    {
        id:4,
        type: 'empty',
        description: 'A flowing river.'
    },
    {
        id:5,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Return to the start and take the new one',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(1))
        }
    },
    {
        id:6,
        type: 'shortcut',
        description: 'You\'ve found a shortcut!',
        action: (dispatch, setTurnInProcess)=>{
            setTimeout(()=>{
                dispatch(gameActions.changePosition(10))
                setTurnInProcess(false)
            }, 400)
        }
    },
    {
        id:7,
        type: 'puzzle',
        description: 'You find an old scroll with a strange text on it',
        actionDescription: 'Solve the puzzle to proceed.',
        questionType: 'text',
        question: 'What is full of holes but still holds water?',
        options: [
            {
            optionText: 'A sponge',
            isCorrect: true
            },
            {
            optionText: 'A bucket',
            isCorrect: false
            },
            {
            optionText: 'A cup',
            isCorrect: false
            },
            {
            optionText: 'A strainer',
            isCorrect: false
            }
        ],
        ifFalseGoBackBy: 4
    },
    {
        id: 8,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id: 9,
        type: 'trap',
        description: 'The flow of the river in this area helps you',
        actionDescription: 'Move 1 cell forward',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition + 1))
        }
    },
    {
        id:10,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:11,
        type: 'item',
        description: 'You\'ve found a Pistol, maybe you will need it',
        itemId: 1,
        action: (dispatch)=>{
            dispatch(gameActions.addItemToInventory(3))
        }
    },
    {
        id:12,
        type: 'puzzle',
        description: 'A message in a bottle washes ashore, and on its paper is a riddle',
        actionDescription: 'Answer the riddle to continue',
        questionType: 'text',
        question: 'I am always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?',
        options: [
            {
            optionText: 'A snake',
            isCorrect: false
            },
            {
            optionText: 'A flame',
            isCorrect: false
            },
            {
            optionText: 'A shark',
            isCorrect: false
            },
            {
            optionText: 'A fire',
            isCorrect: true
            }
        ],
        ifFalseGoBackBy: 10
    },
    {
        id:13,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:14,
        type: 'empty',
        description: 'Endless river...'
    },
    {
        id:15,
        type: 'trap_defendable',
        description: 'You\'ve encountered a snake',
        actionDescription: 'Use one of your weapons to defend yourself or go back by 2',
        action: (dispatch)=>{
            dispatch(gameActions.changePosition(13))
        }
    },
    {
        id:16,
        type: 'shortcut',
        description: 'You\'ve found a shortcut!',
        action: (dispatch, setTurnInProcess)=>{
            setTimeout(()=>{
                dispatch(gameActions.changePosition(24))
                setTurnInProcess(false)
            }, 400)
        }
        
    },
    {
        id:17,
        type: 'puzzle',
        description: 'You are taking a nap and a strange figure appears in your dreams with a question',
        actionDescription: 'Answer it to continue',
        questionType: 'text',
        question: 'What is always in front of you but can’t be seen?',
        options: [
            {
                optionText: 'Your nose',
                isCorrect: false
            },
            {
                optionText: 'The sky',
                isCorrect: false
            },
            {
                optionText: 'The future',
                isCorrect: true
            },
            {
                optionText: 'Your shadow',
                isCorrect: false
            }
        ],
        ifFalseGoBackBy: 16
    },
    {
        id:18,
        type: 'item',
        description: 'You\'ve found a Sabre, maybe you will need it',
        itemId: 1,
        action: (dispatch)=>{
            dispatch(gameActions.addItemToInventory(1))
        }
       
    },
    {
        id:19,
        type: 'empty',
        description: 'Peaceful beach'
    },
    {
        id:20,
        type: 'trap',
        description: 'The flow of the river gets pretty intence, you cant\'t outswim it',
        actionDescription: 'Move 1 cell back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 1))
        }
    },
    {
        id:21,
        type: 'item',
        description: 'You\'ve found a Coconut, maybe you could use it as a weapon',
        itemId: 1,
        action: (dispatch)=>{
            dispatch(gameActions.addItemToInventory(2))
        }
    },
    {
        id:22,
        type: 'shortcut',
        description: 'You\'ve found a shortcut!',
        action: (dispatch, setTurnInProcess)=>{
            setTimeout(()=>{
                dispatch(gameActions.changePosition(30))
                setTurnInProcess(false)
            }, 400)
        }
    },
    {
        id:23,
        type: 'trap_defendable',
        description: 'You\'ve encountered a non friendly pirate',
        actionDescription: 'Use one of your weapons to defend yourself or go back by 4',
        action: (dispatch)=>{
            dispatch(gameActions.changePosition(19))
        }
    },
    {
        id:24,
        type: 'empty',
        description: 'Peacefull beach',
    },
    {
        id:25,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:26,
        
        type: 'trap',
        description: 'Cute bit pretty big crab scared you off',
        actionDescription: 'Move 1 cell back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 1))
        }
    },
    {
        id:27,
        type: 'trap',
        description: 'Ups, the flow of the river gets pretty intence, you cant\'t outswim it',
        actionDescription: 'Move 3 cells back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 3))
        }
    },
    {
        id:28,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:29,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:30,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:31,
        type: 'item',
        description: 'You\'ve found a Pistol, maybe you could use it as a weapon',
        itemId: 1,
        action: (dispatch)=>{
            dispatch(gameActions.addItemToInventory(3))
        }
    },
    {
        id:32,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:33,
        type: 'trap',
        description: 'The flow of the river in this area points your way',
        actionDescription: 'Move 4 cell forward',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition + 4))
        }
    },
    {
        id:34,
        type: 'trap',
        description: 'The flow of the river in this area help you',
        actionDescription: 'Move 3 cell forward',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition + 3))
        }
    },
    {
        id:35,
        type: 'trap',
        description: 'The flow of the river in this area help you',
        actionDescription: 'Move 2 cell forward',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition + 2))
        }
    },
    {
        id:36,
        type: 'trap',
        description: 'The flow of the river in this area help you',
        actionDescription: 'Move 1 cell forward',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition + 1))
        }
    },
    {
        id:37,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:38,
        type: 'trap_defendable',
        description: 'You\'ve encountered a snake',
        actionDescription: 'Use one of your weapons to defend yourself or go back by 2',
        action: (dispatch)=>{
            dispatch(gameActions.changePosition(32))
        }
    },
    {
        id:39,
        type: 'puzzle',
        description: 'You find an old map with a cryptic message written on it',
        actionDescription: 'Solve the puzzle to continue.',
        questionType: 'text',
        question: 'What starts with an E, ends with an E, but only contains one letter?',
        options: [
            {
                optionText: 'An envelope',
                isCorrect: true
              },
              {
                optionText: 'An egg',
                isCorrect: false
              },
              {
                optionText: 'An eraser',
                isCorrect: false
              },
              {
                optionText: 'An eclipce',
                isCorrect: false
              }
        ],
        ifFalseGoBackBy: 8
    },
    {
        id:40,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:41,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:42,
        type: 'empty',
        description: 'Nothing interesting here'
    },
    {
        id:43,
        type: 'empty',
        description: 'You are almost there!'
    },
    {
        id:44,
        type: 'empty',
        description: 'Nothing interesting here'
    }

]



