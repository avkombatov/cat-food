<template>
  <div class="food">
    <div
      class="food__block"
      v-for="(product, idx) in this.$store.getters.food"
      :key="product.id"
      :class="{ food__block_grid: idx === 2 }"
    >
      <div class="food__block-top">
        <div
          class="food__hover"
          @mouseover="mouseHover(product)"
          @mouseleave="mouseLeave(product)"
          @click="setActive(idx, product)"
          :class="{ food__disabled: product.available === false }"
        ></div>
        <div
          class="food__item"
          :class="{ food__item_selected: product.activeItem }"
        >
          <img class="food__img" src="../img/cat.png" alt="cat" />
          <p v-if="!product.activeHover" class="food__descr">
            Сказочное заморское яство
          </p>
          <p v-else class="food__descr food__quastion">Котэ не одобряет?</p>
          <p class="food__name">{{ product.generalName }}</p>
          <p class="food__structure">{{ product.structure }}</p>
          <p class="food__porsion">{{ product.numberPorsion }} порций</p>
          <p class="food__gift">{{ product.gift }}</p>
          <div
            class="food__weight"
            :class="{ food__weight_selected: product.activeItem }"
          >
            <span class="food__weight-number">{{ product.weight }}</span>
            <span class="food__weight-mass">кг</span>
          </div>
        </div>
      </div>

      <p v-if="!product.activeItem && product.available" class="food__buy">
        Чего сидишь? Порадуй котэ,
        <a class="food__buy-a" href="#" @click.prevent="setActive(idx, product)"
          >купи.</a
        >
      </p>
      <p v-else-if="product.activeItem && product.available" class="food__buy">
        {{ product.descrProduct }}
      </p>
      <p v-else class="food__buy">
        Печалька, {{ product.structure }} закончился.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setActive (idx, product) {
      console.log(product.id)
      if (idx === product.id && product.available === true) {
        product.activeItem = !product.activeItem
      }
    },
    mouseHover (product) {
      if (product.activeItem === false) {
        product.activeHover = false
      } else {
        product.activeHover = !product.activeHover
      }
    },
    mouseLeave (product) {
      if (product.activeHover === true) {
        product.activeHover = false
      } else {
        product.activeHover = false
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.food {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column-gap: 80px;
  &__block {
    width: 320px;
    &-top {
      position: relative;
      cursor: pointer;
      width: 320px;
    }
  }
  &__hover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 10px;
  }
  &__disabled {
    background: gray;
    opacity: 0.5;
    cursor: not-allowed;
  }
  &__item {
    border: 4px solid #1698d9;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    // width: 240px;
    height: 459px;
    background: #f2f2f2;
    background-repeat: no-repeat;
    padding-left: 48px;
    padding-top: 21px;
    cursor: pointer;
    &_selected {
      border: 4px solid #d91667;
    }
  }
  &__img {
    position: absolute;
    left: -25px;
    bottom: -95px;
  }
  &__descr {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #666666;
    margin-bottom: 10px;
  }
  &__quastion {
    color: #d91667;
  }
  &__name {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
  }
  &__structure {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 15px;
  }
  &__porsion,
  &__gift {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #666666;
  }
  &__weight {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background: #1698d9;
    position: absolute;
    right: 16px;
    bottom: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    &_selected {
      background: #d91667;
    }
    &-number {
      font-weight: 400;
      font-size: 42px;
      margin-top: 5px;
      display: flex;
      align-items: flex-end;
      text-align: center;
      color: #ffffff;
    }
    &-mass {
      font-weight: 400;
      font-size: 22px;
      margin-top: -8px;
      text-align: center;
      color: #ffffff;
    }
  }
  &__buy {
    font-size: 13px;
    text-align: center;
    color: #ffffff;
    margin-top: 15px;
    &-a {
      color: #22a7e9;
      border-bottom: 1px dashed;
    }
  }
}
@media screen and (max-width: 1160px) {
  .food {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-row-gap: 1em;
    &__block {
      &_grid {
        grid-column: 1/3;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .food {
    grid-column-gap: 0;
  }
}
@media screen and (max-width:700px){
  .food{
    grid-template-columns: repeat(1, 1fr);
    &__block {
      &_grid {
        grid-column: 1/1;
      }
    }
  }
}
@media screen and (max-width:375px){
.food{
  &__block{
    width: 300px;
    &-top{
      width: 300px;
    }
  }
}
}
</style>
