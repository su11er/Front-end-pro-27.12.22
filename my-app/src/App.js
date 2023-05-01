import React, { useReducer, useState } from 'react';

const INITIAL_STATE = {
  size: null,
  filling: null,
  toppings: {
    spice: false,
    mayo: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SIZE':
      return {
        ...state,
        size: action.payload,
      };
    case 'SET_FILLING':
      return {
        ...state,
        filling: action.payload,
      };
    case 'TOGGLE_TOPPING':
      return {
        ...state,
        toppings: {
          ...state.toppings,
          [action.payload]: !state.toppings[action.payload],
        },
      };
    default:
      return state;
  }
}

function Burger() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [price, setPrice] = useState(0);
  const [calories, setCalories] = useState(0);

  function calculatePriceAndCalories() {
    let totalPrice = 0;
    let totalCalories = 0;

    if (state.size === 'small') {
      totalPrice += 50;
      totalCalories += 20;
    } else if (state.size === 'large') {
      totalPrice += 100;
      totalCalories += 40;
    }

    if (state.filling === 'cheese') {
      totalPrice += 10;
      totalCalories += 20;
    } else if (state.filling === 'salad') {
      totalPrice += 20;
      totalCalories += 5;
    } else if (state.filling === 'potato') {
      totalPrice += 15;
      totalCalories += 10;
    }

    if (state.toppings.spice) {
      totalPrice += 15;
    }

    if (state.toppings.mayo) {
      totalPrice += 20;
      totalCalories += 5;
    }

    setPrice(totalPrice);
    setCalories(totalCalories);
  }

  return (
    <div>
      <h2>Burger</h2>
      <div>
        <label>
          <input
            type="radio"
            name="size"
            value="small"
            checked={state.size === 'small'}
            onChange={(e) =>
              dispatch({ type: 'SET_SIZE', payload: e.target.value })
            }
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="large"
            checked={state.size === 'large'}
            onChange={(e) =>
              dispatch({ type: 'SET_SIZE', payload: e.target.value })
          }
          />
        Large
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          name="filling"
          value="cheese"
          checked={state.filling === 'cheese'}
          onChange={(e) =>
            dispatch({ type: 'SET_FILLING', payload: e.target.value })
          }
        />
        Cheese
      </label>
      <label>
        <input
          type="radio"
          name="filling"
          value="salad"
          checked={state.filling === 'salad'}
          onChange={(e) =>
            dispatch({ type: 'SET_FILLING', payload: e.target.value })
          }
        />
        Salad
      </label>
      <label>
        <input
          type="radio"
          name="filling"
          value="potato"
          checked={state.filling === 'potato'}
          onChange={(e) =>
            dispatch({ type: 'SET_FILLING', payload: e.target.value })
          }
        />
        Potato
      </label>
    </div>
    <div>
      <label>
        <input
          type="checkbox"
          name="toppings"
          value="spice"
          checked={state.toppings.spice}
          onChange={(e) =>
            dispatch({ type: 'TOGGLE_TOPPING', payload: 'spice' })
          }
        />
        Spice
      </label>
      <label>
        <input
          type="checkbox"
          name="toppings"
          value="mayo"
          checked={state.toppings.mayo}
          onChange={(e) =>
            dispatch({ type: 'TOGGLE_TOPPING', payload: 'mayo' })
          }
        />
        Mayo
      </label>
    </div>
    <button onClick={calculatePriceAndCalories}>Calculate</button>
    <div>
      <p>Price: {price} тугриків</p>
      <p>Calories: {calories} калорій</p>
    </div>
  </div>
);
}

export default Burger;  