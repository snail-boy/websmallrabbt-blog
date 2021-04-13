<!--<template>-->
<!--    <div class="container-water-fall">-->
<!--        <div>-->
<!--            <button  @click="loadmore">loadmore</button> <button @click="mix">mix</button> <button @click="switchCol(3)">3列</button> <button @click="switchCol(2)">2列</button> <button @click="switchCol(4)">4列</button>-->
<!--        </div>-->

<!--        <waterfall-->
<!--                :col='col'-->
<!--                :width="itemWidth"-->
<!--                :gutterWidth="gutterWidth"-->
<!--                :data="data"-->
<!--                @loadmore="loadmore"-->
<!--                @scroll="scroll">-->
<!--            <template >-->
<!--                <div class="cell-item" v-for="(item,index) in  data ">-->
<!--                    <img v-if="item.img" :src="item.img" alt="加载错误" width="100px"/>-->
<!--                    <div class="item-body">-->
<!--                        <div class="item-desc">{{item.title}}</div>-->
<!--                        <div class="item-footer">-->
<!--                            <div class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>-->
<!--                            <div class="name">{{item.user}}</div>-->
<!--                            <div class="like" :class="item.liked?'active':''" >-->
<!--                                <i ></i>-->
<!--                                <div class="like-total">{{item.liked}}</div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </template>-->
<!--        </waterfall>-->

<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        data(){-->
<!--            return{-->
<!--                data:[{-->
<!--                    img: 'https://cdn2.codefund.app/PJS996n5Eembq7EHjxEB9coY',-->
<!--                    title: 'title',-->
<!--                    user: 'user',-->
<!--                    avatar: 'avatar',-->
<!--                    liked: true-->
<!--                }],-->
<!--                col:3,-->
<!--            }-->
<!--        },-->
<!--        mounted() {-->
<!--            let arr = []-->
<!--            for(let i=0; i<10; i++){-->
<!--                arr.push({-->
<!--                    img: 'https://cdn2.codefund.app/PJS996n5Eembq7EHjxEB9coY',-->
<!--                    title: 'title',-->
<!--                    user: 'user',-->
<!--                    avatar: 'avatar',-->
<!--                    liked: true,-->
<!--                    [i]: i-->
<!--                })-->
<!--            }-->
<!--          this.data = arr-->
<!--        },-->
<!--        computed:{-->
<!--            itemWidth(){-->
<!--                return (100*(document.documentElement.clientWidth/375))  //#rem布局 计算宽度-->
<!--            },-->
<!--            gutterWidth(){-->
<!--                return (26*(document.documentElement.clientWidth/375))   //#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)-->
<!--            }-->
<!--        },-->
<!--        methods:{-->
<!--            scroll(scrollData){-->
<!--                console.log(scrollData)-->
<!--                this.data = this.data.concat(this.data)-->
<!--            },-->
<!--            switchCol(col){-->
<!--                this.col = +col-->
<!--            },-->
<!--            loadmore(index){-->
<!--                this.data = this.data.concat(this.data)-->
<!--            },-->
<!--            mix() {-->

<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
<!--<style>-->
<!--    .container-water-fall {-->
<!--        position: relative;-->
<!--    }-->
<!--</style>-->

