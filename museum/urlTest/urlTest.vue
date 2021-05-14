<template>
	<view>
		<view>
			<button @click="loginin">点击</button>
		</view>
		<!-- <view v-for="ite in museum" :key="ite.pk">
			{{ite.fields.collectionintroduction}}
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// museum: []
			}
		},
		methods: {
			async loginin() {
				const res = await uni.request({	
					url: 'http://127.0.0.1:8000/userstest',
					method: 'POST',
					data: {
						username: 'userdemo',
						password: 'userdemo'
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					success: () => {
						console.log('succeed')
					}
				})
				console.log(res)
			}
		},
		onLoad() {
			
			
		}
	}
</script>

<style>

</style>
