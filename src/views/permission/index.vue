<template>
	<div>
		<permission :mockData='mockData'></permission>
	</div>
</template>

<script>
	import permission from '../permission/menuBtnConfig'
	export default {
		data() {
	    	return {
	    		mockData: [{
                    menuName: "È«²¿",
                    menuId: "0",
                    "menuType": "0",
                    checked: false,
                },
                {
                    "menuId": "4000",
                    "menuCode": null,
                    "menuName": "²Ëµ¥1",
                    "parentId": "0",
                    "menuType": "0",
                    "roleType": "3",
                    checked: false,
                    "listDiffPermissionViewVO": []
                },
                {
                    "menuId": "4001",
                    "menuCode": null,
                    "menuName": "²Ëµ¥2",
                    "parentId": "0",
                    "menuType": "0",
                    "roleType": "3",
                    checked: false,
                    "listDiffPermissionViewVO": []
                },
                {
                    "menuId": "4002",
                    "menuCode": null,
                    "menuName": "²Ëµ¥3",
                    "parentId": "0",
                    "menuType": "0",
                    "roleType": "3",
                    checked: false,
                    "listDiffPermissionViewVO": [{
                            "menuId": "4003",
                            "menuCode": null,
                            "menuName": "²Ëµ¥4",
                            "parentId": "4002",
                            "menuType": "0",
                            "roleType": "3",
                            checked: false,
                            "listDiffPermissionViewVO": [{
                                    "menuId": "4006",
                                    "menuCode": null,
                                    "menuName": "°´Å¥2",
                                    "parentId": "4003",
                                    "menuType": "1",
                                    "roleType": "3",
                                    checked: false,
                                    "listDiffPermissionViewVO": []
                                },
                                {
                                    "menuId": "4011",
                                    "menuCode": null,
                                    "menuName": "²Ëµ¥5",
                                    "parentId": "4003",
                                    "menuType": "0",
                                    "roleType": "3",
                                    checked: false,
                                    "listDiffPermissionViewVO": [{
                                            "menuId": "3312",
                                            "menuCode": null,
                                            "menuName": "²Ëµ¥6",
                                            "parentId": "4011",
                                            "menuType": "0",
                                            "roleType": "3",
                                            checked: false,
                                            "listDiffPermissionViewVO": []
                                        },
                                        {
                                            "menuId": "4012",
                                            "menuCode": null,
                                            "menuName": "°´Å¥3",
                                            "parentId": "4011",
                                            "menuType": "1",
                                            "roleType": "3",
                                            checked: false,
                                            "listDiffPermissionViewVO": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "menuId": "4005",
                            "menuCode": null,
                            "menuName": "°´Å¥1",
                            "parentId": "4002",
                            "menuType": "1",
                            "roleType": "3",
                            checked: false,
                            "listDiffPermissionViewVO": []
                        }
                    ]
                }]
	    	}
	    },
	    components: {
			treeTransfer
	    },
	    created() {
			
		},
	    methods: {

	    }
	}
</script>