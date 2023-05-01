module.exports = {
    "scalars": [
        3,
        5,
        14,
        21,
        22,
        32,
        43,
        55,
        59,
        65,
        74,
        78,
        88,
        98,
        102,
        108,
        117,
        121,
        131,
        141,
        145,
        155,
        165,
        169,
        181,
        192,
        204,
        217,
        226,
        234,
        239,
        246,
        256,
        264,
        269,
        271,
        273,
        278,
        279,
        289,
        293,
        299,
        300,
        310,
        314,
        320,
        321,
        331,
        335,
        341,
        342,
        352,
        356,
        362,
        363,
        373,
        377,
        383,
        384,
        394,
        398,
        404,
        405,
        415,
        419,
        425,
        426,
        436,
        440,
        454,
        465,
        466,
        467,
        479,
        499,
        511,
        512,
        513,
        525,
        541,
        552,
        556,
        558,
        560,
        573,
        585,
        597,
        615,
        625,
        626,
        627,
        631,
        633,
        635,
        656,
        668,
        669,
        670,
        682,
        690,
        707,
        717,
        721,
        725,
        729,
        742,
        768,
        780,
        792,
        800,
        812,
        830,
        842,
        854,
        866,
        874,
        878,
        880,
        882,
        888,
        897,
        901,
        914,
        929,
        930,
        931,
        935,
        937
    ],
    "types": {
        "AlterEmailsInput": {
            "users_ids": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "AlterEmailsOutput": {
            "affected_rows": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "Balance": {
            "balance": [
                21
            ],
            "currency": [
                5
            ],
            "__typename": [
                32
            ]
        },
        "Boolean": {},
        "Boolean_comparison_exp": {
            "_eq": [
                3
            ],
            "_gt": [
                3
            ],
            "_gte": [
                3
            ],
            "_in": [
                3
            ],
            "_is_null": [
                3
            ],
            "_lt": [
                3
            ],
            "_lte": [
                3
            ],
            "_neq": [
                3
            ],
            "_nin": [
                3
            ],
            "__typename": [
                32
            ]
        },
        "CURRENCY": {},
        "CheckClerkPhoneNumberInput": {
            "phoneNumber": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "CheckClerkPhoneNumberOutput": {
            "found": [
                3
            ],
            "__typename": [
                32
            ]
        },
        "ContactInvitationInputItem": {
            "contact_id": [
                32
            ],
            "contact_name": [
                32
            ],
            "contact_phone": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "ContactInvitationOutput": {
            "contacts": [
                10
            ],
            "__typename": [
                32
            ]
        },
        "ContactInvitationOutputItem": {
            "contact_phone": [
                32
            ],
            "invalid_number": [
                3
            ],
            "__typename": [
                32
            ]
        },
        "ContactsInvitationInput": {
            "contacts": [
                8
            ],
            "group_id": [
                32
            ],
            "sender_id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "DepositInput": {
            "amount": [
                633
            ],
            "customer_id": [
                32
            ],
            "cvc": [
                32
            ],
            "exp_month": [
                32
            ],
            "exp_year": [
                32
            ],
            "groupid": [
                32
            ],
            "memberid": [
                32
            ],
            "pan": [
                32
            ],
            "periodid": [
                32
            ],
            "provider": [
                14
            ],
            "__typename": [
                32
            ]
        },
        "DepositOutput": {
            "paymentid": [
                32
            ],
            "provider_result": [
                15
            ],
            "result": [
                16
            ],
            "status": [
                633
            ],
            "__typename": [
                32
            ]
        },
        "DepositPaymentProvider": {},
        "DepositProviderResult": {
            "code": [
                32
            ],
            "message": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "DepositResult": {
            "code": [
                633
            ],
            "message": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "DepositTestInput": {
            "response": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "DepositTestOutput": {
            "request": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "FetchClerkProfileInput": {
            "phoneNumber": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "FetchClerkProfileOutput": {
            "id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "Float": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                22
            ],
            "_gt": [
                22
            ],
            "_gte": [
                22
            ],
            "_in": [
                22
            ],
            "_is_null": [
                3
            ],
            "_lt": [
                22
            ],
            "_lte": [
                22
            ],
            "_neq": [
                22
            ],
            "_nin": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "InviteInput": {
            "group_id": [
                32
            ],
            "receiver_id": [
                32
            ],
            "receiver_phone": [
                32
            ],
            "sender_id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "InviteOutput": {
            "invite_with_whatsapp": [
                3
            ],
            "invited_already": [
                3
            ],
            "invited_successfully": [
                3
            ],
            "__typename": [
                32
            ]
        },
        "PeriodCompletionActionInput": {
            "group_id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "PeriodCompletionActionOutput": {
            "ok": [
                3
            ],
            "__typename": [
                32
            ]
        },
        "RetryPaymentWithdrawInput": {
            "paymentid": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "RetryPaymentWithdrawOutput": {
            "ok": [
                3
            ],
            "__typename": [
                32
            ]
        },
        "SampleInput": {
            "password": [
                32
            ],
            "username": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "SampleOutput": {
            "accessToken": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                32
            ],
            "_gt": [
                32
            ],
            "_gte": [
                32
            ],
            "_ilike": [
                32
            ],
            "_in": [
                32
            ],
            "_iregex": [
                32
            ],
            "_is_null": [
                3
            ],
            "_like": [
                32
            ],
            "_lt": [
                32
            ],
            "_lte": [
                32
            ],
            "_neq": [
                32
            ],
            "_nilike": [
                32
            ],
            "_nin": [
                32
            ],
            "_niregex": [
                32
            ],
            "_nlike": [
                32
            ],
            "_nregex": [
                32
            ],
            "_nsimilar": [
                32
            ],
            "_regex": [
                32
            ],
            "_similar": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "TestMessageInput": {
            "message": [
                32
            ],
            "user_id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "TestMessageOutput": {
            "message": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "UpdateClerkInput": {
            "email": [
                32
            ],
            "first_name": [
                32
            ],
            "id": [
                32
            ],
            "last_name": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "UpdateClerkOutput": {
            "ok": [
                3
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests": {
            "id": [
                937
            ],
            "options": [
                560,
                {
                    "path": [
                        32
                    ]
                }
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_aggregate": {
            "aggregate": [
                40
            ],
            "nodes": [
                38
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        55,
                        "[authProviderRequests_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                48
            ],
            "min": [
                49
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_append_input": {
            "options": [
                560
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_bool_exp": {
            "_and": [
                42
            ],
            "_not": [
                42
            ],
            "_or": [
                42
            ],
            "id": [
                938
            ],
            "options": [
                562
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_constraint": {},
        "authProviderRequests_delete_at_path_input": {
            "options": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_delete_elem_input": {
            "options": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_delete_key_input": {
            "options": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_insert_input": {
            "id": [
                937
            ],
            "options": [
                560
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_max_fields": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_min_fields": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                38
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_on_conflict": {
            "constraint": [
                43
            ],
            "update_columns": [
                59
            ],
            "where": [
                42
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_order_by": {
            "id": [
                635
            ],
            "options": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_prepend_input": {
            "options": [
                560
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_select_column": {},
        "authProviderRequests_set_input": {
            "id": [
                937
            ],
            "options": [
                560
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_stream_cursor_input": {
            "initial_value": [
                58
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_stream_cursor_value_input": {
            "id": [
                937
            ],
            "options": [
                560
            ],
            "__typename": [
                32
            ]
        },
        "authProviderRequests_update_column": {},
        "authProviderRequests_updates": {
            "_append": [
                41
            ],
            "_delete_at_path": [
                44
            ],
            "_delete_elem": [
                45
            ],
            "_delete_key": [
                46
            ],
            "_prepend": [
                54
            ],
            "_set": [
                56
            ],
            "where": [
                42
            ],
            "__typename": [
                32
            ]
        },
        "authProviders": {
            "id": [
                32
            ],
            "userProviders": [
                123,
                {
                    "distinct_on": [
                        141,
                        "[authUserProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        139,
                        "[authUserProviders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "userProviders_aggregate": [
                124,
                {
                    "distinct_on": [
                        141,
                        "[authUserProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        139,
                        "[authUserProviders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_aggregate": {
            "aggregate": [
                63
            ],
            "nodes": [
                61
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        74,
                        "[authProviders_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                67
            ],
            "min": [
                68
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_bool_exp": {
            "_and": [
                64
            ],
            "_not": [
                64
            ],
            "_or": [
                64
            ],
            "id": [
                33
            ],
            "userProviders": [
                130
            ],
            "userProviders_aggregate": [
                125
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_constraint": {},
        "authProviders_insert_input": {
            "id": [
                32
            ],
            "userProviders": [
                129
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_max_fields": {
            "id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_min_fields": {
            "id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                61
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_obj_rel_insert_input": {
            "data": [
                66
            ],
            "on_conflict": [
                71
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_on_conflict": {
            "constraint": [
                65
            ],
            "update_columns": [
                78
            ],
            "where": [
                64
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_order_by": {
            "id": [
                635
            ],
            "userProviders_aggregate": [
                128
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_pk_columns_input": {
            "id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_select_column": {},
        "authProviders_set_input": {
            "id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_stream_cursor_input": {
            "initial_value": [
                77
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_stream_cursor_value_input": {
            "id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authProviders_update_column": {},
        "authProviders_updates": {
            "_set": [
                75
            ],
            "where": [
                64
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens": {
            "createdAt": [
                882
            ],
            "expiresAt": [
                882
            ],
            "refreshToken": [
                937
            ],
            "refreshTokenHash": [
                32
            ],
            "user": [
                903
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_aggregate": {
            "aggregate": [
                84
            ],
            "nodes": [
                80
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_aggregate_bool_exp": {
            "count": [
                83
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_aggregate_bool_exp_count": {
            "arguments": [
                98
            ],
            "distinct": [
                3
            ],
            "filter": [
                87
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        98,
                        "[authRefreshTokens_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                90
            ],
            "min": [
                92
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_aggregate_order_by": {
            "count": [
                635
            ],
            "max": [
                91
            ],
            "min": [
                93
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_arr_rel_insert_input": {
            "data": [
                89
            ],
            "on_conflict": [
                95
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_bool_exp": {
            "_and": [
                87
            ],
            "_not": [
                87
            ],
            "_or": [
                87
            ],
            "createdAt": [
                883
            ],
            "expiresAt": [
                883
            ],
            "refreshToken": [
                938
            ],
            "refreshTokenHash": [
                33
            ],
            "user": [
                913
            ],
            "userId": [
                938
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_constraint": {},
        "authRefreshTokens_insert_input": {
            "createdAt": [
                882
            ],
            "expiresAt": [
                882
            ],
            "refreshToken": [
                937
            ],
            "user": [
                924
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_max_fields": {
            "createdAt": [
                882
            ],
            "expiresAt": [
                882
            ],
            "refreshToken": [
                937
            ],
            "refreshTokenHash": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_max_order_by": {
            "createdAt": [
                635
            ],
            "expiresAt": [
                635
            ],
            "refreshToken": [
                635
            ],
            "refreshTokenHash": [
                635
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_min_fields": {
            "createdAt": [
                882
            ],
            "expiresAt": [
                882
            ],
            "refreshToken": [
                937
            ],
            "refreshTokenHash": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_min_order_by": {
            "createdAt": [
                635
            ],
            "expiresAt": [
                635
            ],
            "refreshToken": [
                635
            ],
            "refreshTokenHash": [
                635
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                80
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_on_conflict": {
            "constraint": [
                88
            ],
            "update_columns": [
                102
            ],
            "where": [
                87
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_order_by": {
            "createdAt": [
                635
            ],
            "expiresAt": [
                635
            ],
            "refreshToken": [
                635
            ],
            "refreshTokenHash": [
                635
            ],
            "user": [
                926
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_pk_columns_input": {
            "refreshToken": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_select_column": {},
        "authRefreshTokens_set_input": {
            "createdAt": [
                882
            ],
            "expiresAt": [
                882
            ],
            "refreshToken": [
                937
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_stream_cursor_input": {
            "initial_value": [
                101
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_stream_cursor_value_input": {
            "createdAt": [
                882
            ],
            "expiresAt": [
                882
            ],
            "refreshToken": [
                937
            ],
            "refreshTokenHash": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authRefreshTokens_update_column": {},
        "authRefreshTokens_updates": {
            "_set": [
                99
            ],
            "where": [
                87
            ],
            "__typename": [
                32
            ]
        },
        "authRoles": {
            "role": [
                32
            ],
            "userRoles": [
                147,
                {
                    "distinct_on": [
                        165,
                        "[authUserRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        163,
                        "[authUserRoles_order_by!]"
                    ],
                    "where": [
                        154
                    ]
                }
            ],
            "userRoles_aggregate": [
                148,
                {
                    "distinct_on": [
                        165,
                        "[authUserRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        163,
                        "[authUserRoles_order_by!]"
                    ],
                    "where": [
                        154
                    ]
                }
            ],
            "usersByDefaultRole": [
                903,
                {
                    "distinct_on": [
                        929,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        926,
                        "[users_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "usersByDefaultRole_aggregate": [
                904,
                {
                    "distinct_on": [
                        929,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        926,
                        "[users_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_aggregate": {
            "aggregate": [
                106
            ],
            "nodes": [
                104
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        117,
                        "[authRoles_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                110
            ],
            "min": [
                111
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_bool_exp": {
            "_and": [
                107
            ],
            "_not": [
                107
            ],
            "_or": [
                107
            ],
            "role": [
                33
            ],
            "userRoles": [
                154
            ],
            "userRoles_aggregate": [
                149
            ],
            "usersByDefaultRole": [
                913
            ],
            "usersByDefaultRole_aggregate": [
                905
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_constraint": {},
        "authRoles_insert_input": {
            "role": [
                32
            ],
            "userRoles": [
                153
            ],
            "usersByDefaultRole": [
                912
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_max_fields": {
            "role": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_min_fields": {
            "role": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                104
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_obj_rel_insert_input": {
            "data": [
                109
            ],
            "on_conflict": [
                114
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_on_conflict": {
            "constraint": [
                108
            ],
            "update_columns": [
                121
            ],
            "where": [
                107
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_order_by": {
            "role": [
                635
            ],
            "userRoles_aggregate": [
                152
            ],
            "usersByDefaultRole_aggregate": [
                910
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_pk_columns_input": {
            "role": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_select_column": {},
        "authRoles_set_input": {
            "role": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_stream_cursor_input": {
            "initial_value": [
                120
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_stream_cursor_value_input": {
            "role": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "authRoles_update_column": {},
        "authRoles_updates": {
            "_set": [
                118
            ],
            "where": [
                107
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders": {
            "accessToken": [
                32
            ],
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "provider": [
                61
            ],
            "providerId": [
                32
            ],
            "providerUserId": [
                32
            ],
            "refreshToken": [
                32
            ],
            "updatedAt": [
                882
            ],
            "user": [
                903
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_aggregate": {
            "aggregate": [
                127
            ],
            "nodes": [
                123
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_aggregate_bool_exp": {
            "count": [
                126
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_aggregate_bool_exp_count": {
            "arguments": [
                141
            ],
            "distinct": [
                3
            ],
            "filter": [
                130
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        141,
                        "[authUserProviders_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                133
            ],
            "min": [
                135
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_aggregate_order_by": {
            "count": [
                635
            ],
            "max": [
                134
            ],
            "min": [
                136
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_arr_rel_insert_input": {
            "data": [
                132
            ],
            "on_conflict": [
                138
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_bool_exp": {
            "_and": [
                130
            ],
            "_not": [
                130
            ],
            "_or": [
                130
            ],
            "accessToken": [
                33
            ],
            "createdAt": [
                883
            ],
            "id": [
                938
            ],
            "provider": [
                64
            ],
            "providerId": [
                33
            ],
            "providerUserId": [
                33
            ],
            "refreshToken": [
                33
            ],
            "updatedAt": [
                883
            ],
            "user": [
                913
            ],
            "userId": [
                938
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_constraint": {},
        "authUserProviders_insert_input": {
            "accessToken": [
                32
            ],
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "provider": [
                70
            ],
            "providerId": [
                32
            ],
            "providerUserId": [
                32
            ],
            "refreshToken": [
                32
            ],
            "updatedAt": [
                882
            ],
            "user": [
                924
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_max_fields": {
            "accessToken": [
                32
            ],
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "providerId": [
                32
            ],
            "providerUserId": [
                32
            ],
            "refreshToken": [
                32
            ],
            "updatedAt": [
                882
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_max_order_by": {
            "accessToken": [
                635
            ],
            "createdAt": [
                635
            ],
            "id": [
                635
            ],
            "providerId": [
                635
            ],
            "providerUserId": [
                635
            ],
            "refreshToken": [
                635
            ],
            "updatedAt": [
                635
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_min_fields": {
            "accessToken": [
                32
            ],
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "providerId": [
                32
            ],
            "providerUserId": [
                32
            ],
            "refreshToken": [
                32
            ],
            "updatedAt": [
                882
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_min_order_by": {
            "accessToken": [
                635
            ],
            "createdAt": [
                635
            ],
            "id": [
                635
            ],
            "providerId": [
                635
            ],
            "providerUserId": [
                635
            ],
            "refreshToken": [
                635
            ],
            "updatedAt": [
                635
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                123
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_on_conflict": {
            "constraint": [
                131
            ],
            "update_columns": [
                145
            ],
            "where": [
                130
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_order_by": {
            "accessToken": [
                635
            ],
            "createdAt": [
                635
            ],
            "id": [
                635
            ],
            "provider": [
                72
            ],
            "providerId": [
                635
            ],
            "providerUserId": [
                635
            ],
            "refreshToken": [
                635
            ],
            "updatedAt": [
                635
            ],
            "user": [
                926
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_select_column": {},
        "authUserProviders_set_input": {
            "accessToken": [
                32
            ],
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "providerId": [
                32
            ],
            "providerUserId": [
                32
            ],
            "refreshToken": [
                32
            ],
            "updatedAt": [
                882
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_stream_cursor_input": {
            "initial_value": [
                144
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_stream_cursor_value_input": {
            "accessToken": [
                32
            ],
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "providerId": [
                32
            ],
            "providerUserId": [
                32
            ],
            "refreshToken": [
                32
            ],
            "updatedAt": [
                882
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserProviders_update_column": {},
        "authUserProviders_updates": {
            "_set": [
                142
            ],
            "where": [
                130
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles": {
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "role": [
                32
            ],
            "roleByRole": [
                104
            ],
            "user": [
                903
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_aggregate": {
            "aggregate": [
                151
            ],
            "nodes": [
                147
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_aggregate_bool_exp": {
            "count": [
                150
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_aggregate_bool_exp_count": {
            "arguments": [
                165
            ],
            "distinct": [
                3
            ],
            "filter": [
                154
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        165,
                        "[authUserRoles_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                157
            ],
            "min": [
                159
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_aggregate_order_by": {
            "count": [
                635
            ],
            "max": [
                158
            ],
            "min": [
                160
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_arr_rel_insert_input": {
            "data": [
                156
            ],
            "on_conflict": [
                162
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_bool_exp": {
            "_and": [
                154
            ],
            "_not": [
                154
            ],
            "_or": [
                154
            ],
            "createdAt": [
                883
            ],
            "id": [
                938
            ],
            "role": [
                33
            ],
            "roleByRole": [
                107
            ],
            "user": [
                913
            ],
            "userId": [
                938
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_constraint": {},
        "authUserRoles_insert_input": {
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "role": [
                32
            ],
            "roleByRole": [
                113
            ],
            "user": [
                924
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_max_fields": {
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "role": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_max_order_by": {
            "createdAt": [
                635
            ],
            "id": [
                635
            ],
            "role": [
                635
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_min_fields": {
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "role": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_min_order_by": {
            "createdAt": [
                635
            ],
            "id": [
                635
            ],
            "role": [
                635
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                147
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_on_conflict": {
            "constraint": [
                155
            ],
            "update_columns": [
                169
            ],
            "where": [
                154
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_order_by": {
            "createdAt": [
                635
            ],
            "id": [
                635
            ],
            "role": [
                635
            ],
            "roleByRole": [
                115
            ],
            "user": [
                926
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_select_column": {},
        "authUserRoles_set_input": {
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "role": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_stream_cursor_input": {
            "initial_value": [
                168
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_stream_cursor_value_input": {
            "createdAt": [
                882
            ],
            "id": [
                937
            ],
            "role": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserRoles_update_column": {},
        "authUserRoles_updates": {
            "_set": [
                166
            ],
            "where": [
                154
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys": {
            "counter": [
                239
            ],
            "credentialId": [
                32
            ],
            "credentialPublicKey": [
                269
            ],
            "id": [
                937
            ],
            "nickname": [
                32
            ],
            "transports": [
                32
            ],
            "user": [
                903
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_aggregate": {
            "aggregate": [
                175
            ],
            "nodes": [
                171
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_aggregate_bool_exp": {
            "count": [
                174
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_aggregate_bool_exp_count": {
            "arguments": [
                192
            ],
            "distinct": [
                3
            ],
            "filter": [
                180
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_aggregate_fields": {
            "avg": [
                178
            ],
            "count": [
                22,
                {
                    "columns": [
                        192,
                        "[authUserSecurityKeys_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                184
            ],
            "min": [
                186
            ],
            "stddev": [
                194
            ],
            "stddev_pop": [
                196
            ],
            "stddev_samp": [
                198
            ],
            "sum": [
                202
            ],
            "var_pop": [
                206
            ],
            "var_samp": [
                208
            ],
            "variance": [
                210
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_aggregate_order_by": {
            "avg": [
                179
            ],
            "count": [
                635
            ],
            "max": [
                185
            ],
            "min": [
                187
            ],
            "stddev": [
                195
            ],
            "stddev_pop": [
                197
            ],
            "stddev_samp": [
                199
            ],
            "sum": [
                203
            ],
            "var_pop": [
                207
            ],
            "var_samp": [
                209
            ],
            "variance": [
                211
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_arr_rel_insert_input": {
            "data": [
                183
            ],
            "on_conflict": [
                189
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_avg_fields": {
            "counter": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_avg_order_by": {
            "counter": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_bool_exp": {
            "_and": [
                180
            ],
            "_not": [
                180
            ],
            "_or": [
                180
            ],
            "counter": [
                240
            ],
            "credentialId": [
                33
            ],
            "credentialPublicKey": [
                270
            ],
            "id": [
                938
            ],
            "nickname": [
                33
            ],
            "transports": [
                33
            ],
            "user": [
                913
            ],
            "userId": [
                938
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_constraint": {},
        "authUserSecurityKeys_inc_input": {
            "counter": [
                239
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_insert_input": {
            "counter": [
                239
            ],
            "credentialId": [
                32
            ],
            "credentialPublicKey": [
                269
            ],
            "id": [
                937
            ],
            "nickname": [
                32
            ],
            "transports": [
                32
            ],
            "user": [
                924
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_max_fields": {
            "counter": [
                239
            ],
            "credentialId": [
                32
            ],
            "id": [
                937
            ],
            "nickname": [
                32
            ],
            "transports": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_max_order_by": {
            "counter": [
                635
            ],
            "credentialId": [
                635
            ],
            "id": [
                635
            ],
            "nickname": [
                635
            ],
            "transports": [
                635
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_min_fields": {
            "counter": [
                239
            ],
            "credentialId": [
                32
            ],
            "id": [
                937
            ],
            "nickname": [
                32
            ],
            "transports": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_min_order_by": {
            "counter": [
                635
            ],
            "credentialId": [
                635
            ],
            "id": [
                635
            ],
            "nickname": [
                635
            ],
            "transports": [
                635
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                171
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_on_conflict": {
            "constraint": [
                181
            ],
            "update_columns": [
                204
            ],
            "where": [
                180
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_order_by": {
            "counter": [
                635
            ],
            "credentialId": [
                635
            ],
            "credentialPublicKey": [
                635
            ],
            "id": [
                635
            ],
            "nickname": [
                635
            ],
            "transports": [
                635
            ],
            "user": [
                926
            ],
            "userId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_select_column": {},
        "authUserSecurityKeys_set_input": {
            "counter": [
                239
            ],
            "credentialId": [
                32
            ],
            "credentialPublicKey": [
                269
            ],
            "id": [
                937
            ],
            "nickname": [
                32
            ],
            "transports": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_stddev_fields": {
            "counter": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_stddev_order_by": {
            "counter": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_stddev_pop_fields": {
            "counter": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_stddev_pop_order_by": {
            "counter": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_stddev_samp_fields": {
            "counter": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_stddev_samp_order_by": {
            "counter": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_stream_cursor_input": {
            "initial_value": [
                201
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_stream_cursor_value_input": {
            "counter": [
                239
            ],
            "credentialId": [
                32
            ],
            "credentialPublicKey": [
                269
            ],
            "id": [
                937
            ],
            "nickname": [
                32
            ],
            "transports": [
                32
            ],
            "userId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_sum_fields": {
            "counter": [
                239
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_sum_order_by": {
            "counter": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_update_column": {},
        "authUserSecurityKeys_updates": {
            "_inc": [
                182
            ],
            "_set": [
                193
            ],
            "where": [
                180
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_var_pop_fields": {
            "counter": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_var_pop_order_by": {
            "counter": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_var_samp_fields": {
            "counter": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_var_samp_order_by": {
            "counter": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_variance_fields": {
            "counter": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "authUserSecurityKeys_variance_order_by": {
            "counter": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations": {
            "executed_at": [
                880
            ],
            "hash": [
                32
            ],
            "id": [
                22
            ],
            "name": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_aggregate": {
            "aggregate": [
                214
            ],
            "nodes": [
                212
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_aggregate_fields": {
            "avg": [
                215
            ],
            "count": [
                22,
                {
                    "columns": [
                        226,
                        "[auth_migrations_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                220
            ],
            "min": [
                221
            ],
            "stddev": [
                228
            ],
            "stddev_pop": [
                229
            ],
            "stddev_samp": [
                230
            ],
            "sum": [
                233
            ],
            "var_pop": [
                236
            ],
            "var_samp": [
                237
            ],
            "variance": [
                238
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_avg_fields": {
            "id": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_bool_exp": {
            "_and": [
                216
            ],
            "_not": [
                216
            ],
            "_or": [
                216
            ],
            "executed_at": [
                881
            ],
            "hash": [
                33
            ],
            "id": [
                23
            ],
            "name": [
                33
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_constraint": {},
        "auth_migrations_inc_input": {
            "id": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_insert_input": {
            "executed_at": [
                880
            ],
            "hash": [
                32
            ],
            "id": [
                22
            ],
            "name": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_max_fields": {
            "executed_at": [
                880
            ],
            "hash": [
                32
            ],
            "id": [
                22
            ],
            "name": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_min_fields": {
            "executed_at": [
                880
            ],
            "hash": [
                32
            ],
            "id": [
                22
            ],
            "name": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                212
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_on_conflict": {
            "constraint": [
                217
            ],
            "update_columns": [
                234
            ],
            "where": [
                216
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_order_by": {
            "executed_at": [
                635
            ],
            "hash": [
                635
            ],
            "id": [
                635
            ],
            "name": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_pk_columns_input": {
            "id": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_select_column": {},
        "auth_migrations_set_input": {
            "executed_at": [
                880
            ],
            "hash": [
                32
            ],
            "id": [
                22
            ],
            "name": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_stddev_fields": {
            "id": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_stddev_pop_fields": {
            "id": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_stddev_samp_fields": {
            "id": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_stream_cursor_input": {
            "initial_value": [
                232
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_stream_cursor_value_input": {
            "executed_at": [
                880
            ],
            "hash": [
                32
            ],
            "id": [
                22
            ],
            "name": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_sum_fields": {
            "id": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_update_column": {},
        "auth_migrations_updates": {
            "_inc": [
                218
            ],
            "_set": [
                227
            ],
            "where": [
                216
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_var_pop_fields": {
            "id": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_var_samp_fields": {
            "id": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "auth_migrations_variance_fields": {
            "id": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "bigint": {},
        "bigint_comparison_exp": {
            "_eq": [
                239
            ],
            "_gt": [
                239
            ],
            "_gte": [
                239
            ],
            "_in": [
                239
            ],
            "_is_null": [
                3
            ],
            "_lt": [
                239
            ],
            "_lte": [
                239
            ],
            "_neq": [
                239
            ],
            "_nin": [
                239
            ],
            "__typename": [
                32
            ]
        },
        "buckets": {
            "cacheControl": [
                32
            ],
            "createdAt": [
                882
            ],
            "downloadExpiration": [
                22
            ],
            "files": [
                442,
                {
                    "distinct_on": [
                        465,
                        "[files_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        463,
                        "[files_order_by!]"
                    ],
                    "where": [
                        453
                    ]
                }
            ],
            "files_aggregate": [
                443,
                {
                    "distinct_on": [
                        465,
                        "[files_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        463,
                        "[files_order_by!]"
                    ],
                    "where": [
                        453
                    ]
                }
            ],
            "id": [
                32
            ],
            "maxUploadFileSize": [
                22
            ],
            "minUploadFileSize": [
                22
            ],
            "presignedUrlsEnabled": [
                3
            ],
            "updatedAt": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "buckets_aggregate": {
            "aggregate": [
                243
            ],
            "nodes": [
                241
            ],
            "__typename": [
                32
            ]
        },
        "buckets_aggregate_fields": {
            "avg": [
                244
            ],
            "count": [
                22,
                {
                    "columns": [
                        256,
                        "[buckets_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                249
            ],
            "min": [
                250
            ],
            "stddev": [
                258
            ],
            "stddev_pop": [
                259
            ],
            "stddev_samp": [
                260
            ],
            "sum": [
                263
            ],
            "var_pop": [
                266
            ],
            "var_samp": [
                267
            ],
            "variance": [
                268
            ],
            "__typename": [
                32
            ]
        },
        "buckets_avg_fields": {
            "downloadExpiration": [
                21
            ],
            "maxUploadFileSize": [
                21
            ],
            "minUploadFileSize": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "buckets_bool_exp": {
            "_and": [
                245
            ],
            "_not": [
                245
            ],
            "_or": [
                245
            ],
            "cacheControl": [
                33
            ],
            "createdAt": [
                883
            ],
            "downloadExpiration": [
                23
            ],
            "files": [
                453
            ],
            "files_aggregate": [
                444
            ],
            "id": [
                33
            ],
            "maxUploadFileSize": [
                23
            ],
            "minUploadFileSize": [
                23
            ],
            "presignedUrlsEnabled": [
                4
            ],
            "updatedAt": [
                883
            ],
            "__typename": [
                32
            ]
        },
        "buckets_constraint": {},
        "buckets_inc_input": {
            "downloadExpiration": [
                22
            ],
            "maxUploadFileSize": [
                22
            ],
            "minUploadFileSize": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "buckets_insert_input": {
            "cacheControl": [
                32
            ],
            "createdAt": [
                882
            ],
            "downloadExpiration": [
                22
            ],
            "files": [
                450
            ],
            "id": [
                32
            ],
            "maxUploadFileSize": [
                22
            ],
            "minUploadFileSize": [
                22
            ],
            "presignedUrlsEnabled": [
                3
            ],
            "updatedAt": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "buckets_max_fields": {
            "cacheControl": [
                32
            ],
            "createdAt": [
                882
            ],
            "downloadExpiration": [
                22
            ],
            "id": [
                32
            ],
            "maxUploadFileSize": [
                22
            ],
            "minUploadFileSize": [
                22
            ],
            "updatedAt": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "buckets_min_fields": {
            "cacheControl": [
                32
            ],
            "createdAt": [
                882
            ],
            "downloadExpiration": [
                22
            ],
            "id": [
                32
            ],
            "maxUploadFileSize": [
                22
            ],
            "minUploadFileSize": [
                22
            ],
            "updatedAt": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "buckets_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                241
            ],
            "__typename": [
                32
            ]
        },
        "buckets_obj_rel_insert_input": {
            "data": [
                248
            ],
            "on_conflict": [
                253
            ],
            "__typename": [
                32
            ]
        },
        "buckets_on_conflict": {
            "constraint": [
                246
            ],
            "update_columns": [
                264
            ],
            "where": [
                245
            ],
            "__typename": [
                32
            ]
        },
        "buckets_order_by": {
            "cacheControl": [
                635
            ],
            "createdAt": [
                635
            ],
            "downloadExpiration": [
                635
            ],
            "files_aggregate": [
                449
            ],
            "id": [
                635
            ],
            "maxUploadFileSize": [
                635
            ],
            "minUploadFileSize": [
                635
            ],
            "presignedUrlsEnabled": [
                635
            ],
            "updatedAt": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "buckets_pk_columns_input": {
            "id": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "buckets_select_column": {},
        "buckets_set_input": {
            "cacheControl": [
                32
            ],
            "createdAt": [
                882
            ],
            "downloadExpiration": [
                22
            ],
            "id": [
                32
            ],
            "maxUploadFileSize": [
                22
            ],
            "minUploadFileSize": [
                22
            ],
            "presignedUrlsEnabled": [
                3
            ],
            "updatedAt": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "buckets_stddev_fields": {
            "downloadExpiration": [
                21
            ],
            "maxUploadFileSize": [
                21
            ],
            "minUploadFileSize": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "buckets_stddev_pop_fields": {
            "downloadExpiration": [
                21
            ],
            "maxUploadFileSize": [
                21
            ],
            "minUploadFileSize": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "buckets_stddev_samp_fields": {
            "downloadExpiration": [
                21
            ],
            "maxUploadFileSize": [
                21
            ],
            "minUploadFileSize": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "buckets_stream_cursor_input": {
            "initial_value": [
                262
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "buckets_stream_cursor_value_input": {
            "cacheControl": [
                32
            ],
            "createdAt": [
                882
            ],
            "downloadExpiration": [
                22
            ],
            "id": [
                32
            ],
            "maxUploadFileSize": [
                22
            ],
            "minUploadFileSize": [
                22
            ],
            "presignedUrlsEnabled": [
                3
            ],
            "updatedAt": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "buckets_sum_fields": {
            "downloadExpiration": [
                22
            ],
            "maxUploadFileSize": [
                22
            ],
            "minUploadFileSize": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "buckets_update_column": {},
        "buckets_updates": {
            "_inc": [
                247
            ],
            "_set": [
                257
            ],
            "where": [
                245
            ],
            "__typename": [
                32
            ]
        },
        "buckets_var_pop_fields": {
            "downloadExpiration": [
                21
            ],
            "maxUploadFileSize": [
                21
            ],
            "minUploadFileSize": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "buckets_var_samp_fields": {
            "downloadExpiration": [
                21
            ],
            "maxUploadFileSize": [
                21
            ],
            "minUploadFileSize": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "buckets_variance_fields": {
            "downloadExpiration": [
                21
            ],
            "maxUploadFileSize": [
                21
            ],
            "minUploadFileSize": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "bytea": {},
        "bytea_comparison_exp": {
            "_eq": [
                269
            ],
            "_gt": [
                269
            ],
            "_gte": [
                269
            ],
            "_in": [
                269
            ],
            "_is_null": [
                3
            ],
            "_lt": [
                269
            ],
            "_lte": [
                269
            ],
            "_neq": [
                269
            ],
            "_nin": [
                269
            ],
            "__typename": [
                32
            ]
        },
        "citext": {},
        "citext_comparison_exp": {
            "_eq": [
                271
            ],
            "_gt": [
                271
            ],
            "_gte": [
                271
            ],
            "_ilike": [
                271
            ],
            "_in": [
                271
            ],
            "_iregex": [
                271
            ],
            "_is_null": [
                3
            ],
            "_like": [
                271
            ],
            "_lt": [
                271
            ],
            "_lte": [
                271
            ],
            "_neq": [
                271
            ],
            "_nilike": [
                271
            ],
            "_nin": [
                271
            ],
            "_niregex": [
                271
            ],
            "_nlike": [
                271
            ],
            "_nregex": [
                271
            ],
            "_nsimilar": [
                271
            ],
            "_regex": [
                271
            ],
            "_similar": [
                271
            ],
            "__typename": [
                32
            ]
        },
        "cursor_ordering": {},
        "en_currencies": {
            "description": [
                32
            ],
            "payments": [
                731,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payments_aggregate": [
                732,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_aggregate": {
            "aggregate": [
                276
            ],
            "nodes": [
                274
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        289,
                        "[en_currencies_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                282
            ],
            "min": [
                283
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_bool_exp": {
            "_and": [
                277
            ],
            "_not": [
                277
            ],
            "_or": [
                277
            ],
            "description": [
                33
            ],
            "payments": [
                741
            ],
            "payments_aggregate": [
                733
            ],
            "value": [
                33
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_constraint": {},
        "en_currencies_enum": {},
        "en_currencies_enum_comparison_exp": {
            "_eq": [
                279
            ],
            "_in": [
                279
            ],
            "_is_null": [
                3
            ],
            "_neq": [
                279
            ],
            "_nin": [
                279
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_insert_input": {
            "description": [
                32
            ],
            "payments": [
                738
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_max_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_min_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                274
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_obj_rel_insert_input": {
            "data": [
                281
            ],
            "on_conflict": [
                286
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_on_conflict": {
            "constraint": [
                278
            ],
            "update_columns": [
                293
            ],
            "where": [
                277
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_order_by": {
            "description": [
                635
            ],
            "payments_aggregate": [
                736
            ],
            "value": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_pk_columns_input": {
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_select_column": {},
        "en_currencies_set_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_stream_cursor_input": {
            "initial_value": [
                292
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_stream_cursor_value_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_currencies_update_column": {},
        "en_currencies_updates": {
            "_set": [
                290
            ],
            "where": [
                277
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications": {
            "description": [
                32
            ],
            "invites": [
                533,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "invites_aggregate": [
                534,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "notifications": [
                605,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "notifications_aggregate": [
                606,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_aggregate": {
            "aggregate": [
                297
            ],
            "nodes": [
                295
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        310,
                        "[en_notifications_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                303
            ],
            "min": [
                304
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_bool_exp": {
            "_and": [
                298
            ],
            "_not": [
                298
            ],
            "_or": [
                298
            ],
            "description": [
                33
            ],
            "invites": [
                540
            ],
            "invites_aggregate": [
                535
            ],
            "notifications": [
                614
            ],
            "notifications_aggregate": [
                607
            ],
            "value": [
                33
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_constraint": {},
        "en_notifications_enum": {},
        "en_notifications_enum_comparison_exp": {
            "_eq": [
                300
            ],
            "_in": [
                300
            ],
            "_is_null": [
                3
            ],
            "_neq": [
                300
            ],
            "_nin": [
                300
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_insert_input": {
            "description": [
                32
            ],
            "invites": [
                539
            ],
            "notifications": [
                613
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_max_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_min_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                295
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_obj_rel_insert_input": {
            "data": [
                302
            ],
            "on_conflict": [
                307
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_on_conflict": {
            "constraint": [
                299
            ],
            "update_columns": [
                314
            ],
            "where": [
                298
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_order_by": {
            "description": [
                635
            ],
            "invites_aggregate": [
                538
            ],
            "notifications_aggregate": [
                612
            ],
            "value": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_pk_columns_input": {
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_select_column": {},
        "en_notifications_set_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_stream_cursor_input": {
            "initial_value": [
                313
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_stream_cursor_value_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_notifications_update_column": {},
        "en_notifications_updates": {
            "_set": [
                311
            ],
            "where": [
                298
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps": {
            "description": [
                32
            ],
            "partners": [
                636,
                {
                    "distinct_on": [
                        725,
                        "[partner_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        723,
                        "[partner_order_by!]"
                    ],
                    "where": [
                        643
                    ]
                }
            ],
            "partners_aggregate": [
                637,
                {
                    "distinct_on": [
                        725,
                        "[partner_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        723,
                        "[partner_order_by!]"
                    ],
                    "where": [
                        643
                    ]
                }
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_aggregate": {
            "aggregate": [
                318
            ],
            "nodes": [
                316
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        331,
                        "[en_partner_steps_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                324
            ],
            "min": [
                325
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_bool_exp": {
            "_and": [
                319
            ],
            "_not": [
                319
            ],
            "_or": [
                319
            ],
            "description": [
                33
            ],
            "partners": [
                643
            ],
            "partners_aggregate": [
                638
            ],
            "value": [
                33
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_constraint": {},
        "en_partner_steps_enum": {},
        "en_partner_steps_enum_comparison_exp": {
            "_eq": [
                321
            ],
            "_in": [
                321
            ],
            "_is_null": [
                3
            ],
            "_neq": [
                321
            ],
            "_nin": [
                321
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_insert_input": {
            "description": [
                32
            ],
            "partners": [
                642
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_max_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_min_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                316
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_obj_rel_insert_input": {
            "data": [
                323
            ],
            "on_conflict": [
                328
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_on_conflict": {
            "constraint": [
                320
            ],
            "update_columns": [
                335
            ],
            "where": [
                319
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_order_by": {
            "description": [
                635
            ],
            "partners_aggregate": [
                641
            ],
            "value": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_pk_columns_input": {
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_select_column": {},
        "en_partner_steps_set_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_stream_cursor_input": {
            "initial_value": [
                334
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_stream_cursor_value_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_partner_steps_update_column": {},
        "en_partner_steps_updates": {
            "_set": [
                332
            ],
            "where": [
                319
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers": {
            "description": [
                32
            ],
            "payments": [
                731,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payments_aggregate": [
                732,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_aggregate": {
            "aggregate": [
                339
            ],
            "nodes": [
                337
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        352,
                        "[en_payment_providers_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                345
            ],
            "min": [
                346
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_bool_exp": {
            "_and": [
                340
            ],
            "_not": [
                340
            ],
            "_or": [
                340
            ],
            "description": [
                33
            ],
            "payments": [
                741
            ],
            "payments_aggregate": [
                733
            ],
            "value": [
                33
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_constraint": {},
        "en_payment_providers_enum": {},
        "en_payment_providers_enum_comparison_exp": {
            "_eq": [
                342
            ],
            "_in": [
                342
            ],
            "_is_null": [
                3
            ],
            "_neq": [
                342
            ],
            "_nin": [
                342
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_insert_input": {
            "description": [
                32
            ],
            "payments": [
                738
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_max_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_min_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                337
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_obj_rel_insert_input": {
            "data": [
                344
            ],
            "on_conflict": [
                349
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_on_conflict": {
            "constraint": [
                341
            ],
            "update_columns": [
                356
            ],
            "where": [
                340
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_order_by": {
            "description": [
                635
            ],
            "payments_aggregate": [
                736
            ],
            "value": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_pk_columns_input": {
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_select_column": {},
        "en_payment_providers_set_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_stream_cursor_input": {
            "initial_value": [
                355
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_stream_cursor_value_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_payment_providers_update_column": {},
        "en_payment_providers_updates": {
            "_set": [
                353
            ],
            "where": [
                340
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions": {
            "description": [
                32
            ],
            "payment_permissions": [
                758,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_permissions_aggregate": [
                759,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_aggregate": {
            "aggregate": [
                360
            ],
            "nodes": [
                358
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        373,
                        "[en_permissions_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                366
            ],
            "min": [
                367
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_bool_exp": {
            "_and": [
                361
            ],
            "_not": [
                361
            ],
            "_or": [
                361
            ],
            "description": [
                33
            ],
            "payment_permissions": [
                767
            ],
            "payment_permissions_aggregate": [
                760
            ],
            "value": [
                33
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_constraint": {},
        "en_permissions_enum": {},
        "en_permissions_enum_comparison_exp": {
            "_eq": [
                363
            ],
            "_in": [
                363
            ],
            "_is_null": [
                3
            ],
            "_neq": [
                363
            ],
            "_nin": [
                363
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_insert_input": {
            "description": [
                32
            ],
            "payment_permissions": [
                764
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_max_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_min_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                358
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_obj_rel_insert_input": {
            "data": [
                365
            ],
            "on_conflict": [
                370
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_on_conflict": {
            "constraint": [
                362
            ],
            "update_columns": [
                377
            ],
            "where": [
                361
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_order_by": {
            "description": [
                635
            ],
            "payment_permissions_aggregate": [
                763
            ],
            "value": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_pk_columns_input": {
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_select_column": {},
        "en_permissions_set_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_stream_cursor_input": {
            "initial_value": [
                376
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_stream_cursor_value_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_permissions_update_column": {},
        "en_permissions_updates": {
            "_set": [
                374
            ],
            "where": [
                361
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies": {
            "description": [
                32
            ],
            "groups": [
                487,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "groups_aggregate": [
                488,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "members": [
                563,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "members_aggregate": [
                564,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_aggregate": {
            "aggregate": [
                381
            ],
            "nodes": [
                379
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        394,
                        "[en_recurrencies_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                387
            ],
            "min": [
                388
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_bool_exp": {
            "_and": [
                382
            ],
            "_not": [
                382
            ],
            "_or": [
                382
            ],
            "description": [
                33
            ],
            "groups": [
                498
            ],
            "groups_aggregate": [
                489
            ],
            "members": [
                572
            ],
            "members_aggregate": [
                565
            ],
            "value": [
                33
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_constraint": {},
        "en_recurrencies_enum": {},
        "en_recurrencies_enum_comparison_exp": {
            "_eq": [
                384
            ],
            "_in": [
                384
            ],
            "_is_null": [
                3
            ],
            "_neq": [
                384
            ],
            "_nin": [
                384
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_insert_input": {
            "description": [
                32
            ],
            "groups": [
                495
            ],
            "members": [
                569
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_max_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_min_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                379
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_obj_rel_insert_input": {
            "data": [
                386
            ],
            "on_conflict": [
                391
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_on_conflict": {
            "constraint": [
                383
            ],
            "update_columns": [
                398
            ],
            "where": [
                382
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_order_by": {
            "description": [
                635
            ],
            "groups_aggregate": [
                494
            ],
            "members_aggregate": [
                568
            ],
            "value": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_pk_columns_input": {
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_select_column": {},
        "en_recurrencies_set_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_stream_cursor_input": {
            "initial_value": [
                397
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_stream_cursor_value_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_recurrencies_update_column": {},
        "en_recurrencies_updates": {
            "_set": [
                395
            ],
            "where": [
                382
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses": {
            "description": [
                32
            ],
            "invites": [
                533,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "invites_aggregate": [
                534,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "notifications": [
                605,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "notifications_aggregate": [
                606,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "payments": [
                731,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payments_aggregate": [
                732,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_aggregate": {
            "aggregate": [
                402
            ],
            "nodes": [
                400
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        415,
                        "[en_statuses_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                408
            ],
            "min": [
                409
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_bool_exp": {
            "_and": [
                403
            ],
            "_not": [
                403
            ],
            "_or": [
                403
            ],
            "description": [
                33
            ],
            "invites": [
                540
            ],
            "invites_aggregate": [
                535
            ],
            "notifications": [
                614
            ],
            "notifications_aggregate": [
                607
            ],
            "payments": [
                741
            ],
            "payments_aggregate": [
                733
            ],
            "value": [
                33
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_constraint": {},
        "en_statuses_enum": {},
        "en_statuses_enum_comparison_exp": {
            "_eq": [
                405
            ],
            "_in": [
                405
            ],
            "_is_null": [
                3
            ],
            "_neq": [
                405
            ],
            "_nin": [
                405
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_insert_input": {
            "description": [
                32
            ],
            "invites": [
                539
            ],
            "notifications": [
                613
            ],
            "payments": [
                738
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_max_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_min_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                400
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_obj_rel_insert_input": {
            "data": [
                407
            ],
            "on_conflict": [
                412
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_on_conflict": {
            "constraint": [
                404
            ],
            "update_columns": [
                419
            ],
            "where": [
                403
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_order_by": {
            "description": [
                635
            ],
            "invites_aggregate": [
                538
            ],
            "notifications_aggregate": [
                612
            ],
            "payments_aggregate": [
                736
            ],
            "value": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_pk_columns_input": {
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_select_column": {},
        "en_statuses_set_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_stream_cursor_input": {
            "initial_value": [
                418
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_stream_cursor_value_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_statuses_update_column": {},
        "en_statuses_updates": {
            "_set": [
                416
            ],
            "where": [
                403
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types": {
            "description": [
                32
            ],
            "payments": [
                731,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payments_aggregate": [
                732,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_aggregate": {
            "aggregate": [
                423
            ],
            "nodes": [
                421
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        436,
                        "[en_trans_types_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                429
            ],
            "min": [
                430
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_bool_exp": {
            "_and": [
                424
            ],
            "_not": [
                424
            ],
            "_or": [
                424
            ],
            "description": [
                33
            ],
            "payments": [
                741
            ],
            "payments_aggregate": [
                733
            ],
            "value": [
                33
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_constraint": {},
        "en_trans_types_enum": {},
        "en_trans_types_enum_comparison_exp": {
            "_eq": [
                426
            ],
            "_in": [
                426
            ],
            "_is_null": [
                3
            ],
            "_neq": [
                426
            ],
            "_nin": [
                426
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_insert_input": {
            "description": [
                32
            ],
            "payments": [
                738
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_max_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_min_fields": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                421
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_obj_rel_insert_input": {
            "data": [
                428
            ],
            "on_conflict": [
                433
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_on_conflict": {
            "constraint": [
                425
            ],
            "update_columns": [
                440
            ],
            "where": [
                424
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_order_by": {
            "description": [
                635
            ],
            "payments_aggregate": [
                736
            ],
            "value": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_pk_columns_input": {
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_select_column": {},
        "en_trans_types_set_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_stream_cursor_input": {
            "initial_value": [
                439
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_stream_cursor_value_input": {
            "description": [
                32
            ],
            "value": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "en_trans_types_update_column": {},
        "en_trans_types_updates": {
            "_set": [
                437
            ],
            "where": [
                424
            ],
            "__typename": [
                32
            ]
        },
        "files": {
            "bucket": [
                241
            ],
            "bucketId": [
                32
            ],
            "createdAt": [
                882
            ],
            "etag": [
                32
            ],
            "id": [
                937
            ],
            "isUploaded": [
                3
            ],
            "mimeType": [
                32
            ],
            "name": [
                32
            ],
            "size": [
                22
            ],
            "updatedAt": [
                882
            ],
            "uploadedByUserId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "files_aggregate": {
            "aggregate": [
                448
            ],
            "nodes": [
                442
            ],
            "__typename": [
                32
            ]
        },
        "files_aggregate_bool_exp": {
            "bool_and": [
                445
            ],
            "bool_or": [
                446
            ],
            "count": [
                447
            ],
            "__typename": [
                32
            ]
        },
        "files_aggregate_bool_exp_bool_and": {
            "arguments": [
                466
            ],
            "distinct": [
                3
            ],
            "filter": [
                453
            ],
            "predicate": [
                4
            ],
            "__typename": [
                32
            ]
        },
        "files_aggregate_bool_exp_bool_or": {
            "arguments": [
                467
            ],
            "distinct": [
                3
            ],
            "filter": [
                453
            ],
            "predicate": [
                4
            ],
            "__typename": [
                32
            ]
        },
        "files_aggregate_bool_exp_count": {
            "arguments": [
                465
            ],
            "distinct": [
                3
            ],
            "filter": [
                453
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "files_aggregate_fields": {
            "avg": [
                451
            ],
            "count": [
                22,
                {
                    "columns": [
                        465,
                        "[files_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                457
            ],
            "min": [
                459
            ],
            "stddev": [
                469
            ],
            "stddev_pop": [
                471
            ],
            "stddev_samp": [
                473
            ],
            "sum": [
                477
            ],
            "var_pop": [
                481
            ],
            "var_samp": [
                483
            ],
            "variance": [
                485
            ],
            "__typename": [
                32
            ]
        },
        "files_aggregate_order_by": {
            "avg": [
                452
            ],
            "count": [
                635
            ],
            "max": [
                458
            ],
            "min": [
                460
            ],
            "stddev": [
                470
            ],
            "stddev_pop": [
                472
            ],
            "stddev_samp": [
                474
            ],
            "sum": [
                478
            ],
            "var_pop": [
                482
            ],
            "var_samp": [
                484
            ],
            "variance": [
                486
            ],
            "__typename": [
                32
            ]
        },
        "files_arr_rel_insert_input": {
            "data": [
                456
            ],
            "on_conflict": [
                462
            ],
            "__typename": [
                32
            ]
        },
        "files_avg_fields": {
            "size": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "files_avg_order_by": {
            "size": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "files_bool_exp": {
            "_and": [
                453
            ],
            "_not": [
                453
            ],
            "_or": [
                453
            ],
            "bucket": [
                245
            ],
            "bucketId": [
                33
            ],
            "createdAt": [
                883
            ],
            "etag": [
                33
            ],
            "id": [
                938
            ],
            "isUploaded": [
                4
            ],
            "mimeType": [
                33
            ],
            "name": [
                33
            ],
            "size": [
                23
            ],
            "updatedAt": [
                883
            ],
            "uploadedByUserId": [
                938
            ],
            "__typename": [
                32
            ]
        },
        "files_constraint": {},
        "files_inc_input": {
            "size": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "files_insert_input": {
            "bucket": [
                252
            ],
            "bucketId": [
                32
            ],
            "createdAt": [
                882
            ],
            "etag": [
                32
            ],
            "id": [
                937
            ],
            "isUploaded": [
                3
            ],
            "mimeType": [
                32
            ],
            "name": [
                32
            ],
            "size": [
                22
            ],
            "updatedAt": [
                882
            ],
            "uploadedByUserId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "files_max_fields": {
            "bucketId": [
                32
            ],
            "createdAt": [
                882
            ],
            "etag": [
                32
            ],
            "id": [
                937
            ],
            "mimeType": [
                32
            ],
            "name": [
                32
            ],
            "size": [
                22
            ],
            "updatedAt": [
                882
            ],
            "uploadedByUserId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "files_max_order_by": {
            "bucketId": [
                635
            ],
            "createdAt": [
                635
            ],
            "etag": [
                635
            ],
            "id": [
                635
            ],
            "mimeType": [
                635
            ],
            "name": [
                635
            ],
            "size": [
                635
            ],
            "updatedAt": [
                635
            ],
            "uploadedByUserId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "files_min_fields": {
            "bucketId": [
                32
            ],
            "createdAt": [
                882
            ],
            "etag": [
                32
            ],
            "id": [
                937
            ],
            "mimeType": [
                32
            ],
            "name": [
                32
            ],
            "size": [
                22
            ],
            "updatedAt": [
                882
            ],
            "uploadedByUserId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "files_min_order_by": {
            "bucketId": [
                635
            ],
            "createdAt": [
                635
            ],
            "etag": [
                635
            ],
            "id": [
                635
            ],
            "mimeType": [
                635
            ],
            "name": [
                635
            ],
            "size": [
                635
            ],
            "updatedAt": [
                635
            ],
            "uploadedByUserId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "files_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                442
            ],
            "__typename": [
                32
            ]
        },
        "files_on_conflict": {
            "constraint": [
                454
            ],
            "update_columns": [
                479
            ],
            "where": [
                453
            ],
            "__typename": [
                32
            ]
        },
        "files_order_by": {
            "bucket": [
                254
            ],
            "bucketId": [
                635
            ],
            "createdAt": [
                635
            ],
            "etag": [
                635
            ],
            "id": [
                635
            ],
            "isUploaded": [
                635
            ],
            "mimeType": [
                635
            ],
            "name": [
                635
            ],
            "size": [
                635
            ],
            "updatedAt": [
                635
            ],
            "uploadedByUserId": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "files_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "files_select_column": {},
        "files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns": {},
        "files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns": {},
        "files_set_input": {
            "bucketId": [
                32
            ],
            "createdAt": [
                882
            ],
            "etag": [
                32
            ],
            "id": [
                937
            ],
            "isUploaded": [
                3
            ],
            "mimeType": [
                32
            ],
            "name": [
                32
            ],
            "size": [
                22
            ],
            "updatedAt": [
                882
            ],
            "uploadedByUserId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "files_stddev_fields": {
            "size": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "files_stddev_order_by": {
            "size": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "files_stddev_pop_fields": {
            "size": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "files_stddev_pop_order_by": {
            "size": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "files_stddev_samp_fields": {
            "size": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "files_stddev_samp_order_by": {
            "size": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "files_stream_cursor_input": {
            "initial_value": [
                476
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "files_stream_cursor_value_input": {
            "bucketId": [
                32
            ],
            "createdAt": [
                882
            ],
            "etag": [
                32
            ],
            "id": [
                937
            ],
            "isUploaded": [
                3
            ],
            "mimeType": [
                32
            ],
            "name": [
                32
            ],
            "size": [
                22
            ],
            "updatedAt": [
                882
            ],
            "uploadedByUserId": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "files_sum_fields": {
            "size": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "files_sum_order_by": {
            "size": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "files_update_column": {},
        "files_updates": {
            "_inc": [
                455
            ],
            "_set": [
                468
            ],
            "where": [
                453
            ],
            "__typename": [
                32
            ]
        },
        "files_var_pop_fields": {
            "size": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "files_var_pop_order_by": {
            "size": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "files_var_samp_fields": {
            "size": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "files_var_samp_order_by": {
            "size": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "files_variance_fields": {
            "size": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "files_variance_order_by": {
            "size": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "group": {
            "admin_id": [
                937
            ],
            "contribution": [
                633
            ],
            "contribution_for_all": [
                3
            ],
            "created_at": [
                880
            ],
            "dummy": [
                32
            ],
            "enum_recurrency": [
                379
            ],
            "group_balance": [
                633
            ],
            "group_name": [
                32
            ],
            "id": [
                937
            ],
            "invitations": [
                533,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "invitations_aggregate": [
                534,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "members": [
                563,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "members_aggregate": [
                564,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "partner": [
                636
            ],
            "partner_campaign": [
                644
            ],
            "partner_campaign_id": [
                937
            ],
            "partner_id": [
                937
            ],
            "payment_reviews": [
                758,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_reviews_aggregate": [
                759,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payments": [
                731,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payments_aggregate": [
                732,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "periods": [
                820,
                {
                    "distinct_on": [
                        842,
                        "[period_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        840,
                        "[period_order_by!]"
                    ],
                    "where": [
                        829
                    ]
                }
            ],
            "periods_aggregate": [
                821,
                {
                    "distinct_on": [
                        842,
                        "[period_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        840,
                        "[period_order_by!]"
                    ],
                    "where": [
                        829
                    ]
                }
            ],
            "recurrency": [
                384
            ],
            "recurrency_day": [
                22
            ],
            "recurrency_for_all": [
                3
            ],
            "updated_at": [
                882
            ],
            "user": [
                903
            ],
            "__typename": [
                32
            ]
        },
        "group_aggregate": {
            "aggregate": [
                493
            ],
            "nodes": [
                487
            ],
            "__typename": [
                32
            ]
        },
        "group_aggregate_bool_exp": {
            "bool_and": [
                490
            ],
            "bool_or": [
                491
            ],
            "count": [
                492
            ],
            "__typename": [
                32
            ]
        },
        "group_aggregate_bool_exp_bool_and": {
            "arguments": [
                512
            ],
            "distinct": [
                3
            ],
            "filter": [
                498
            ],
            "predicate": [
                4
            ],
            "__typename": [
                32
            ]
        },
        "group_aggregate_bool_exp_bool_or": {
            "arguments": [
                513
            ],
            "distinct": [
                3
            ],
            "filter": [
                498
            ],
            "predicate": [
                4
            ],
            "__typename": [
                32
            ]
        },
        "group_aggregate_bool_exp_count": {
            "arguments": [
                511
            ],
            "distinct": [
                3
            ],
            "filter": [
                498
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "group_aggregate_fields": {
            "avg": [
                496
            ],
            "count": [
                22,
                {
                    "columns": [
                        511,
                        "[group_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                502
            ],
            "min": [
                504
            ],
            "stddev": [
                515
            ],
            "stddev_pop": [
                517
            ],
            "stddev_samp": [
                519
            ],
            "sum": [
                523
            ],
            "var_pop": [
                527
            ],
            "var_samp": [
                529
            ],
            "variance": [
                531
            ],
            "__typename": [
                32
            ]
        },
        "group_aggregate_order_by": {
            "avg": [
                497
            ],
            "count": [
                635
            ],
            "max": [
                503
            ],
            "min": [
                505
            ],
            "stddev": [
                516
            ],
            "stddev_pop": [
                518
            ],
            "stddev_samp": [
                520
            ],
            "sum": [
                524
            ],
            "var_pop": [
                528
            ],
            "var_samp": [
                530
            ],
            "variance": [
                532
            ],
            "__typename": [
                32
            ]
        },
        "group_arr_rel_insert_input": {
            "data": [
                501
            ],
            "on_conflict": [
                508
            ],
            "__typename": [
                32
            ]
        },
        "group_avg_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "group_avg_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "group_bool_exp": {
            "_and": [
                498
            ],
            "_not": [
                498
            ],
            "_or": [
                498
            ],
            "admin_id": [
                938
            ],
            "contribution": [
                634
            ],
            "contribution_for_all": [
                4
            ],
            "created_at": [
                881
            ],
            "dummy": [
                33
            ],
            "enum_recurrency": [
                382
            ],
            "group_balance": [
                634
            ],
            "group_name": [
                33
            ],
            "id": [
                938
            ],
            "invitations": [
                540
            ],
            "invitations_aggregate": [
                535
            ],
            "members": [
                572
            ],
            "members_aggregate": [
                565
            ],
            "partner": [
                643
            ],
            "partner_campaign": [
                655
            ],
            "partner_campaign_id": [
                938
            ],
            "partner_id": [
                938
            ],
            "payment_reviews": [
                767
            ],
            "payment_reviews_aggregate": [
                760
            ],
            "payments": [
                741
            ],
            "payments_aggregate": [
                733
            ],
            "periods": [
                829
            ],
            "periods_aggregate": [
                822
            ],
            "recurrency": [
                385
            ],
            "recurrency_day": [
                23
            ],
            "recurrency_for_all": [
                4
            ],
            "updated_at": [
                883
            ],
            "user": [
                913
            ],
            "__typename": [
                32
            ]
        },
        "group_constraint": {},
        "group_inc_input": {
            "contribution": [
                633
            ],
            "recurrency_day": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "group_insert_input": {
            "admin_id": [
                937
            ],
            "contribution": [
                633
            ],
            "contribution_for_all": [
                3
            ],
            "created_at": [
                880
            ],
            "dummy": [
                32
            ],
            "enum_recurrency": [
                390
            ],
            "group_name": [
                32
            ],
            "id": [
                937
            ],
            "invitations": [
                539
            ],
            "members": [
                569
            ],
            "partner": [
                697
            ],
            "partner_campaign": [
                664
            ],
            "partner_campaign_id": [
                937
            ],
            "partner_id": [
                937
            ],
            "payment_reviews": [
                764
            ],
            "payments": [
                738
            ],
            "periods": [
                826
            ],
            "recurrency": [
                384
            ],
            "recurrency_day": [
                22
            ],
            "recurrency_for_all": [
                3
            ],
            "updated_at": [
                882
            ],
            "user": [
                924
            ],
            "__typename": [
                32
            ]
        },
        "group_max_fields": {
            "admin_id": [
                937
            ],
            "contribution": [
                633
            ],
            "created_at": [
                880
            ],
            "dummy": [
                32
            ],
            "group_name": [
                32
            ],
            "id": [
                937
            ],
            "partner_campaign_id": [
                937
            ],
            "partner_id": [
                937
            ],
            "recurrency_day": [
                22
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "group_max_order_by": {
            "admin_id": [
                635
            ],
            "contribution": [
                635
            ],
            "created_at": [
                635
            ],
            "dummy": [
                635
            ],
            "group_name": [
                635
            ],
            "id": [
                635
            ],
            "partner_campaign_id": [
                635
            ],
            "partner_id": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "group_min_fields": {
            "admin_id": [
                937
            ],
            "contribution": [
                633
            ],
            "created_at": [
                880
            ],
            "dummy": [
                32
            ],
            "group_name": [
                32
            ],
            "id": [
                937
            ],
            "partner_campaign_id": [
                937
            ],
            "partner_id": [
                937
            ],
            "recurrency_day": [
                22
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "group_min_order_by": {
            "admin_id": [
                635
            ],
            "contribution": [
                635
            ],
            "created_at": [
                635
            ],
            "dummy": [
                635
            ],
            "group_name": [
                635
            ],
            "id": [
                635
            ],
            "partner_campaign_id": [
                635
            ],
            "partner_id": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "group_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                487
            ],
            "__typename": [
                32
            ]
        },
        "group_obj_rel_insert_input": {
            "data": [
                501
            ],
            "on_conflict": [
                508
            ],
            "__typename": [
                32
            ]
        },
        "group_on_conflict": {
            "constraint": [
                499
            ],
            "update_columns": [
                525
            ],
            "where": [
                498
            ],
            "__typename": [
                32
            ]
        },
        "group_order_by": {
            "admin_id": [
                635
            ],
            "contribution": [
                635
            ],
            "contribution_for_all": [
                635
            ],
            "created_at": [
                635
            ],
            "dummy": [
                635
            ],
            "enum_recurrency": [
                392
            ],
            "group_balance": [
                635
            ],
            "group_name": [
                635
            ],
            "id": [
                635
            ],
            "invitations_aggregate": [
                538
            ],
            "members_aggregate": [
                568
            ],
            "partner": [
                723
            ],
            "partner_campaign": [
                666
            ],
            "partner_campaign_id": [
                635
            ],
            "partner_id": [
                635
            ],
            "payment_reviews_aggregate": [
                763
            ],
            "payments_aggregate": [
                736
            ],
            "periods_aggregate": [
                825
            ],
            "recurrency": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "recurrency_for_all": [
                635
            ],
            "updated_at": [
                635
            ],
            "user": [
                926
            ],
            "__typename": [
                32
            ]
        },
        "group_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "group_select_column": {},
        "group_select_column_group_aggregate_bool_exp_bool_and_arguments_columns": {},
        "group_select_column_group_aggregate_bool_exp_bool_or_arguments_columns": {},
        "group_set_input": {
            "admin_id": [
                937
            ],
            "contribution": [
                633
            ],
            "contribution_for_all": [
                3
            ],
            "created_at": [
                880
            ],
            "dummy": [
                32
            ],
            "group_name": [
                32
            ],
            "id": [
                937
            ],
            "partner_campaign_id": [
                937
            ],
            "partner_id": [
                937
            ],
            "recurrency": [
                384
            ],
            "recurrency_day": [
                22
            ],
            "recurrency_for_all": [
                3
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "group_stddev_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "group_stddev_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "group_stddev_pop_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "group_stddev_pop_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "group_stddev_samp_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "group_stddev_samp_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "group_stream_cursor_input": {
            "initial_value": [
                522
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "group_stream_cursor_value_input": {
            "admin_id": [
                937
            ],
            "contribution": [
                633
            ],
            "contribution_for_all": [
                3
            ],
            "created_at": [
                880
            ],
            "dummy": [
                32
            ],
            "group_name": [
                32
            ],
            "id": [
                937
            ],
            "partner_campaign_id": [
                937
            ],
            "partner_id": [
                937
            ],
            "recurrency": [
                384
            ],
            "recurrency_day": [
                22
            ],
            "recurrency_for_all": [
                3
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "group_sum_fields": {
            "contribution": [
                633
            ],
            "recurrency_day": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "group_sum_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "group_update_column": {},
        "group_updates": {
            "_inc": [
                500
            ],
            "_set": [
                514
            ],
            "where": [
                498
            ],
            "__typename": [
                32
            ]
        },
        "group_var_pop_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "group_var_pop_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "group_var_samp_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "group_var_samp_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "group_variance_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "group_variance_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "invitation": {
            "created_at": [
                882
            ],
            "dummy": [
                32
            ],
            "en_notification": [
                295
            ],
            "en_status": [
                400
            ],
            "group": [
                487
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "invite_status": [
                405
            ],
            "invite_type": [
                300
            ],
            "members": [
                563,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "members_aggregate": [
                564,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "notifications": [
                605,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "notifications_aggregate": [
                606,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "receiver_id": [
                937
            ],
            "receiver_phone": [
                32
            ],
            "sender_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "user": [
                903
            ],
            "userBySenderId": [
                903
            ],
            "__typename": [
                32
            ]
        },
        "invitation_aggregate": {
            "aggregate": [
                537
            ],
            "nodes": [
                533
            ],
            "__typename": [
                32
            ]
        },
        "invitation_aggregate_bool_exp": {
            "count": [
                536
            ],
            "__typename": [
                32
            ]
        },
        "invitation_aggregate_bool_exp_count": {
            "arguments": [
                552
            ],
            "distinct": [
                3
            ],
            "filter": [
                540
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "invitation_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                543
            ],
            "min": [
                545
            ],
            "__typename": [
                32
            ]
        },
        "invitation_aggregate_order_by": {
            "count": [
                635
            ],
            "max": [
                544
            ],
            "min": [
                546
            ],
            "__typename": [
                32
            ]
        },
        "invitation_arr_rel_insert_input": {
            "data": [
                542
            ],
            "on_conflict": [
                549
            ],
            "__typename": [
                32
            ]
        },
        "invitation_bool_exp": {
            "_and": [
                540
            ],
            "_not": [
                540
            ],
            "_or": [
                540
            ],
            "created_at": [
                883
            ],
            "dummy": [
                33
            ],
            "en_notification": [
                298
            ],
            "en_status": [
                403
            ],
            "group": [
                498
            ],
            "group_id": [
                938
            ],
            "id": [
                938
            ],
            "invite_status": [
                406
            ],
            "invite_type": [
                301
            ],
            "members": [
                572
            ],
            "members_aggregate": [
                565
            ],
            "notifications": [
                614
            ],
            "notifications_aggregate": [
                607
            ],
            "receiver_id": [
                938
            ],
            "receiver_phone": [
                33
            ],
            "sender_id": [
                938
            ],
            "updated_at": [
                883
            ],
            "user": [
                913
            ],
            "userBySenderId": [
                913
            ],
            "__typename": [
                32
            ]
        },
        "invitation_constraint": {},
        "invitation_insert_input": {
            "created_at": [
                882
            ],
            "dummy": [
                32
            ],
            "en_notification": [
                306
            ],
            "en_status": [
                411
            ],
            "group": [
                507
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "invite_status": [
                405
            ],
            "invite_type": [
                300
            ],
            "members": [
                569
            ],
            "notifications": [
                613
            ],
            "receiver_id": [
                937
            ],
            "receiver_phone": [
                32
            ],
            "sender_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "user": [
                924
            ],
            "userBySenderId": [
                924
            ],
            "__typename": [
                32
            ]
        },
        "invitation_max_fields": {
            "created_at": [
                882
            ],
            "dummy": [
                32
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "receiver_id": [
                937
            ],
            "receiver_phone": [
                32
            ],
            "sender_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "invitation_max_order_by": {
            "created_at": [
                635
            ],
            "dummy": [
                635
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "receiver_id": [
                635
            ],
            "receiver_phone": [
                635
            ],
            "sender_id": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "invitation_min_fields": {
            "created_at": [
                882
            ],
            "dummy": [
                32
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "receiver_id": [
                937
            ],
            "receiver_phone": [
                32
            ],
            "sender_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "invitation_min_order_by": {
            "created_at": [
                635
            ],
            "dummy": [
                635
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "receiver_id": [
                635
            ],
            "receiver_phone": [
                635
            ],
            "sender_id": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "invitation_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                533
            ],
            "__typename": [
                32
            ]
        },
        "invitation_obj_rel_insert_input": {
            "data": [
                542
            ],
            "on_conflict": [
                549
            ],
            "__typename": [
                32
            ]
        },
        "invitation_on_conflict": {
            "constraint": [
                541
            ],
            "update_columns": [
                556
            ],
            "where": [
                540
            ],
            "__typename": [
                32
            ]
        },
        "invitation_order_by": {
            "created_at": [
                635
            ],
            "dummy": [
                635
            ],
            "en_notification": [
                308
            ],
            "en_status": [
                413
            ],
            "group": [
                509
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "invite_status": [
                635
            ],
            "invite_type": [
                635
            ],
            "members_aggregate": [
                568
            ],
            "notifications_aggregate": [
                612
            ],
            "receiver_id": [
                635
            ],
            "receiver_phone": [
                635
            ],
            "sender_id": [
                635
            ],
            "updated_at": [
                635
            ],
            "user": [
                926
            ],
            "userBySenderId": [
                926
            ],
            "__typename": [
                32
            ]
        },
        "invitation_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "invitation_select_column": {},
        "invitation_set_input": {
            "created_at": [
                882
            ],
            "dummy": [
                32
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "invite_status": [
                405
            ],
            "invite_type": [
                300
            ],
            "receiver_id": [
                937
            ],
            "receiver_phone": [
                32
            ],
            "sender_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "invitation_stream_cursor_input": {
            "initial_value": [
                555
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "invitation_stream_cursor_value_input": {
            "created_at": [
                882
            ],
            "dummy": [
                32
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "invite_status": [
                405
            ],
            "invite_type": [
                300
            ],
            "receiver_id": [
                937
            ],
            "receiver_phone": [
                32
            ],
            "sender_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "invitation_update_column": {},
        "invitation_updates": {
            "_set": [
                553
            ],
            "where": [
                540
            ],
            "__typename": [
                32
            ]
        },
        "json": {},
        "json_comparison_exp": {
            "_eq": [
                558
            ],
            "_gt": [
                558
            ],
            "_gte": [
                558
            ],
            "_in": [
                558
            ],
            "_is_null": [
                3
            ],
            "_lt": [
                558
            ],
            "_lte": [
                558
            ],
            "_neq": [
                558
            ],
            "_nin": [
                558
            ],
            "__typename": [
                32
            ]
        },
        "jsonb": {},
        "jsonb_cast_exp": {
            "String": [
                33
            ],
            "__typename": [
                32
            ]
        },
        "jsonb_comparison_exp": {
            "_cast": [
                561
            ],
            "_contained_in": [
                560
            ],
            "_contains": [
                560
            ],
            "_eq": [
                560
            ],
            "_gt": [
                560
            ],
            "_gte": [
                560
            ],
            "_has_key": [
                32
            ],
            "_has_keys_all": [
                32
            ],
            "_has_keys_any": [
                32
            ],
            "_in": [
                560
            ],
            "_is_null": [
                3
            ],
            "_lt": [
                560
            ],
            "_lte": [
                560
            ],
            "_neq": [
                560
            ],
            "_nin": [
                560
            ],
            "__typename": [
                32
            ]
        },
        "member": {
            "contribution": [
                633
            ],
            "created_at": [
                882
            ],
            "enum_recurrency": [
                379
            ],
            "expense": [
                633
            ],
            "group": [
                487
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "income": [
                633
            ],
            "invitation": [
                533
            ],
            "invitation_id": [
                937
            ],
            "paymentReviewsByRequesterId": [
                758,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "paymentReviewsByRequesterId_aggregate": [
                759,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_reviews": [
                758,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_reviews_aggregate": [
                759,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payments": [
                731,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payments_aggregate": [
                732,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "periods": [
                820,
                {
                    "distinct_on": [
                        842,
                        "[period_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        840,
                        "[period_order_by!]"
                    ],
                    "where": [
                        829
                    ]
                }
            ],
            "periods_aggregate": [
                821,
                {
                    "distinct_on": [
                        842,
                        "[period_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        840,
                        "[period_order_by!]"
                    ],
                    "where": [
                        829
                    ]
                }
            ],
            "recurrency": [
                384
            ],
            "recurrency_day": [
                22
            ],
            "reminder_days": [
                32
            ],
            "reminder_id": [
                937
            ],
            "reminder_next": [
                882
            ],
            "updated_at": [
                882
            ],
            "user": [
                903
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "member_aggregate": {
            "aggregate": [
                567
            ],
            "nodes": [
                563
            ],
            "__typename": [
                32
            ]
        },
        "member_aggregate_bool_exp": {
            "count": [
                566
            ],
            "__typename": [
                32
            ]
        },
        "member_aggregate_bool_exp_count": {
            "arguments": [
                585
            ],
            "distinct": [
                3
            ],
            "filter": [
                572
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "member_aggregate_fields": {
            "avg": [
                570
            ],
            "count": [
                22,
                {
                    "columns": [
                        585,
                        "[member_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                576
            ],
            "min": [
                578
            ],
            "stddev": [
                587
            ],
            "stddev_pop": [
                589
            ],
            "stddev_samp": [
                591
            ],
            "sum": [
                595
            ],
            "var_pop": [
                599
            ],
            "var_samp": [
                601
            ],
            "variance": [
                603
            ],
            "__typename": [
                32
            ]
        },
        "member_aggregate_order_by": {
            "avg": [
                571
            ],
            "count": [
                635
            ],
            "max": [
                577
            ],
            "min": [
                579
            ],
            "stddev": [
                588
            ],
            "stddev_pop": [
                590
            ],
            "stddev_samp": [
                592
            ],
            "sum": [
                596
            ],
            "var_pop": [
                600
            ],
            "var_samp": [
                602
            ],
            "variance": [
                604
            ],
            "__typename": [
                32
            ]
        },
        "member_arr_rel_insert_input": {
            "data": [
                575
            ],
            "on_conflict": [
                582
            ],
            "__typename": [
                32
            ]
        },
        "member_avg_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "member_avg_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "member_bool_exp": {
            "_and": [
                572
            ],
            "_not": [
                572
            ],
            "_or": [
                572
            ],
            "contribution": [
                634
            ],
            "created_at": [
                883
            ],
            "enum_recurrency": [
                382
            ],
            "expense": [
                634
            ],
            "group": [
                498
            ],
            "group_id": [
                938
            ],
            "id": [
                938
            ],
            "income": [
                634
            ],
            "invitation": [
                540
            ],
            "invitation_id": [
                938
            ],
            "paymentReviewsByRequesterId": [
                767
            ],
            "paymentReviewsByRequesterId_aggregate": [
                760
            ],
            "payment_reviews": [
                767
            ],
            "payment_reviews_aggregate": [
                760
            ],
            "payments": [
                741
            ],
            "payments_aggregate": [
                733
            ],
            "periods": [
                829
            ],
            "periods_aggregate": [
                822
            ],
            "recurrency": [
                385
            ],
            "recurrency_day": [
                23
            ],
            "reminder_days": [
                33
            ],
            "reminder_id": [
                938
            ],
            "reminder_next": [
                883
            ],
            "updated_at": [
                883
            ],
            "user": [
                913
            ],
            "user_id": [
                938
            ],
            "__typename": [
                32
            ]
        },
        "member_constraint": {},
        "member_inc_input": {
            "contribution": [
                633
            ],
            "recurrency_day": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "member_insert_input": {
            "contribution": [
                633
            ],
            "created_at": [
                882
            ],
            "enum_recurrency": [
                390
            ],
            "group": [
                507
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "invitation": [
                548
            ],
            "invitation_id": [
                937
            ],
            "paymentReviewsByRequesterId": [
                764
            ],
            "payment_reviews": [
                764
            ],
            "payments": [
                738
            ],
            "periods": [
                826
            ],
            "recurrency": [
                384
            ],
            "recurrency_day": [
                22
            ],
            "reminder_days": [
                32
            ],
            "reminder_id": [
                937
            ],
            "reminder_next": [
                882
            ],
            "updated_at": [
                882
            ],
            "user": [
                924
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "member_max_fields": {
            "contribution": [
                633
            ],
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "invitation_id": [
                937
            ],
            "recurrency_day": [
                22
            ],
            "reminder_days": [
                32
            ],
            "reminder_id": [
                937
            ],
            "reminder_next": [
                882
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "member_max_order_by": {
            "contribution": [
                635
            ],
            "created_at": [
                635
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "invitation_id": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "reminder_days": [
                635
            ],
            "reminder_id": [
                635
            ],
            "reminder_next": [
                635
            ],
            "updated_at": [
                635
            ],
            "user_id": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "member_min_fields": {
            "contribution": [
                633
            ],
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "invitation_id": [
                937
            ],
            "recurrency_day": [
                22
            ],
            "reminder_days": [
                32
            ],
            "reminder_id": [
                937
            ],
            "reminder_next": [
                882
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "member_min_order_by": {
            "contribution": [
                635
            ],
            "created_at": [
                635
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "invitation_id": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "reminder_days": [
                635
            ],
            "reminder_id": [
                635
            ],
            "reminder_next": [
                635
            ],
            "updated_at": [
                635
            ],
            "user_id": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "member_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                563
            ],
            "__typename": [
                32
            ]
        },
        "member_obj_rel_insert_input": {
            "data": [
                575
            ],
            "on_conflict": [
                582
            ],
            "__typename": [
                32
            ]
        },
        "member_on_conflict": {
            "constraint": [
                573
            ],
            "update_columns": [
                597
            ],
            "where": [
                572
            ],
            "__typename": [
                32
            ]
        },
        "member_order_by": {
            "contribution": [
                635
            ],
            "created_at": [
                635
            ],
            "enum_recurrency": [
                392
            ],
            "expense": [
                635
            ],
            "group": [
                509
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "income": [
                635
            ],
            "invitation": [
                550
            ],
            "invitation_id": [
                635
            ],
            "paymentReviewsByRequesterId_aggregate": [
                763
            ],
            "payment_reviews_aggregate": [
                763
            ],
            "payments_aggregate": [
                736
            ],
            "periods_aggregate": [
                825
            ],
            "recurrency": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "reminder_days": [
                635
            ],
            "reminder_id": [
                635
            ],
            "reminder_next": [
                635
            ],
            "updated_at": [
                635
            ],
            "user": [
                926
            ],
            "user_id": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "member_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "member_select_column": {},
        "member_set_input": {
            "contribution": [
                633
            ],
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "invitation_id": [
                937
            ],
            "recurrency": [
                384
            ],
            "recurrency_day": [
                22
            ],
            "reminder_days": [
                32
            ],
            "reminder_id": [
                937
            ],
            "reminder_next": [
                882
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "member_stddev_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "member_stddev_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "member_stddev_pop_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "member_stddev_pop_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "member_stddev_samp_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "member_stddev_samp_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "member_stream_cursor_input": {
            "initial_value": [
                594
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "member_stream_cursor_value_input": {
            "contribution": [
                633
            ],
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "invitation_id": [
                937
            ],
            "recurrency": [
                384
            ],
            "recurrency_day": [
                22
            ],
            "reminder_days": [
                32
            ],
            "reminder_id": [
                937
            ],
            "reminder_next": [
                882
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "member_sum_fields": {
            "contribution": [
                633
            ],
            "recurrency_day": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "member_sum_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "member_update_column": {},
        "member_updates": {
            "_inc": [
                574
            ],
            "_set": [
                586
            ],
            "where": [
                572
            ],
            "__typename": [
                32
            ]
        },
        "member_var_pop_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "member_var_pop_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "member_var_samp_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "member_var_samp_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "member_variance_fields": {
            "contribution": [
                21
            ],
            "recurrency_day": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "member_variance_order_by": {
            "contribution": [
                635
            ],
            "recurrency_day": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "notification": {
            "created_at": [
                882
            ],
            "data": [
                558,
                {
                    "path": [
                        32
                    ]
                }
            ],
            "en_notification": [
                295
            ],
            "en_status": [
                400
            ],
            "id": [
                937
            ],
            "invitation": [
                533
            ],
            "invitation_id": [
                937
            ],
            "is_viewed": [
                3
            ],
            "message": [
                32
            ],
            "notifiable": [
                3
            ],
            "payment_review_id": [
                937
            ],
            "payment_reviews": [
                758
            ],
            "period": [
                820
            ],
            "period_id": [
                937
            ],
            "status": [
                405
            ],
            "title": [
                32
            ],
            "type": [
                300
            ],
            "updated_at": [
                882
            ],
            "user": [
                903
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "notification_aggregate": {
            "aggregate": [
                611
            ],
            "nodes": [
                605
            ],
            "__typename": [
                32
            ]
        },
        "notification_aggregate_bool_exp": {
            "bool_and": [
                608
            ],
            "bool_or": [
                609
            ],
            "count": [
                610
            ],
            "__typename": [
                32
            ]
        },
        "notification_aggregate_bool_exp_bool_and": {
            "arguments": [
                626
            ],
            "distinct": [
                3
            ],
            "filter": [
                614
            ],
            "predicate": [
                4
            ],
            "__typename": [
                32
            ]
        },
        "notification_aggregate_bool_exp_bool_or": {
            "arguments": [
                627
            ],
            "distinct": [
                3
            ],
            "filter": [
                614
            ],
            "predicate": [
                4
            ],
            "__typename": [
                32
            ]
        },
        "notification_aggregate_bool_exp_count": {
            "arguments": [
                625
            ],
            "distinct": [
                3
            ],
            "filter": [
                614
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "notification_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                617
            ],
            "min": [
                619
            ],
            "__typename": [
                32
            ]
        },
        "notification_aggregate_order_by": {
            "count": [
                635
            ],
            "max": [
                618
            ],
            "min": [
                620
            ],
            "__typename": [
                32
            ]
        },
        "notification_arr_rel_insert_input": {
            "data": [
                616
            ],
            "on_conflict": [
                622
            ],
            "__typename": [
                32
            ]
        },
        "notification_bool_exp": {
            "_and": [
                614
            ],
            "_not": [
                614
            ],
            "_or": [
                614
            ],
            "created_at": [
                883
            ],
            "data": [
                559
            ],
            "en_notification": [
                298
            ],
            "en_status": [
                403
            ],
            "id": [
                938
            ],
            "invitation": [
                540
            ],
            "invitation_id": [
                938
            ],
            "is_viewed": [
                4
            ],
            "message": [
                33
            ],
            "notifiable": [
                4
            ],
            "payment_review_id": [
                938
            ],
            "payment_reviews": [
                767
            ],
            "period": [
                829
            ],
            "period_id": [
                938
            ],
            "status": [
                406
            ],
            "title": [
                33
            ],
            "type": [
                301
            ],
            "updated_at": [
                883
            ],
            "user": [
                913
            ],
            "user_id": [
                938
            ],
            "__typename": [
                32
            ]
        },
        "notification_constraint": {},
        "notification_insert_input": {
            "created_at": [
                882
            ],
            "data": [
                558
            ],
            "en_notification": [
                306
            ],
            "en_status": [
                411
            ],
            "id": [
                937
            ],
            "invitation": [
                548
            ],
            "invitation_id": [
                937
            ],
            "is_viewed": [
                3
            ],
            "message": [
                32
            ],
            "notifiable": [
                3
            ],
            "payment_review_id": [
                937
            ],
            "payment_reviews": [
                776
            ],
            "period": [
                838
            ],
            "period_id": [
                937
            ],
            "status": [
                405
            ],
            "title": [
                32
            ],
            "type": [
                300
            ],
            "updated_at": [
                882
            ],
            "user": [
                924
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "notification_max_fields": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "invitation_id": [
                937
            ],
            "message": [
                32
            ],
            "payment_review_id": [
                937
            ],
            "period_id": [
                937
            ],
            "title": [
                32
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "notification_max_order_by": {
            "created_at": [
                635
            ],
            "id": [
                635
            ],
            "invitation_id": [
                635
            ],
            "message": [
                635
            ],
            "payment_review_id": [
                635
            ],
            "period_id": [
                635
            ],
            "title": [
                635
            ],
            "updated_at": [
                635
            ],
            "user_id": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "notification_min_fields": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "invitation_id": [
                937
            ],
            "message": [
                32
            ],
            "payment_review_id": [
                937
            ],
            "period_id": [
                937
            ],
            "title": [
                32
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "notification_min_order_by": {
            "created_at": [
                635
            ],
            "id": [
                635
            ],
            "invitation_id": [
                635
            ],
            "message": [
                635
            ],
            "payment_review_id": [
                635
            ],
            "period_id": [
                635
            ],
            "title": [
                635
            ],
            "updated_at": [
                635
            ],
            "user_id": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "notification_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                605
            ],
            "__typename": [
                32
            ]
        },
        "notification_on_conflict": {
            "constraint": [
                615
            ],
            "update_columns": [
                631
            ],
            "where": [
                614
            ],
            "__typename": [
                32
            ]
        },
        "notification_order_by": {
            "created_at": [
                635
            ],
            "data": [
                635
            ],
            "en_notification": [
                308
            ],
            "en_status": [
                413
            ],
            "id": [
                635
            ],
            "invitation": [
                550
            ],
            "invitation_id": [
                635
            ],
            "is_viewed": [
                635
            ],
            "message": [
                635
            ],
            "notifiable": [
                635
            ],
            "payment_review_id": [
                635
            ],
            "payment_reviews": [
                778
            ],
            "period": [
                840
            ],
            "period_id": [
                635
            ],
            "status": [
                635
            ],
            "title": [
                635
            ],
            "type": [
                635
            ],
            "updated_at": [
                635
            ],
            "user": [
                926
            ],
            "user_id": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "notification_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "notification_select_column": {},
        "notification_select_column_notification_aggregate_bool_exp_bool_and_arguments_columns": {},
        "notification_select_column_notification_aggregate_bool_exp_bool_or_arguments_columns": {},
        "notification_set_input": {
            "created_at": [
                882
            ],
            "data": [
                558
            ],
            "id": [
                937
            ],
            "invitation_id": [
                937
            ],
            "is_viewed": [
                3
            ],
            "message": [
                32
            ],
            "notifiable": [
                3
            ],
            "payment_review_id": [
                937
            ],
            "period_id": [
                937
            ],
            "status": [
                405
            ],
            "title": [
                32
            ],
            "type": [
                300
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "notification_stream_cursor_input": {
            "initial_value": [
                630
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "notification_stream_cursor_value_input": {
            "created_at": [
                882
            ],
            "data": [
                558
            ],
            "id": [
                937
            ],
            "invitation_id": [
                937
            ],
            "is_viewed": [
                3
            ],
            "message": [
                32
            ],
            "notifiable": [
                3
            ],
            "payment_review_id": [
                937
            ],
            "period_id": [
                937
            ],
            "status": [
                405
            ],
            "title": [
                32
            ],
            "type": [
                300
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "notification_update_column": {},
        "notification_updates": {
            "_set": [
                628
            ],
            "where": [
                614
            ],
            "__typename": [
                32
            ]
        },
        "numeric": {},
        "numeric_comparison_exp": {
            "_eq": [
                633
            ],
            "_gt": [
                633
            ],
            "_gte": [
                633
            ],
            "_in": [
                633
            ],
            "_is_null": [
                3
            ],
            "_lt": [
                633
            ],
            "_lte": [
                633
            ],
            "_neq": [
                633
            ],
            "_nin": [
                633
            ],
            "__typename": [
                32
            ]
        },
        "order_by": {},
        "partner": {
            "created_at": [
                882
            ],
            "en_partner_step": [
                316
            ],
            "groups": [
                487,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "groups_aggregate": [
                488,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "id": [
                937
            ],
            "partner_address": [
                32
            ],
            "partner_campaigns": [
                644,
                {
                    "distinct_on": [
                        668,
                        "[partner_campaign_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        666,
                        "[partner_campaign_order_by!]"
                    ],
                    "where": [
                        655
                    ]
                }
            ],
            "partner_campaigns_aggregate": [
                645,
                {
                    "distinct_on": [
                        668,
                        "[partner_campaign_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        666,
                        "[partner_campaign_order_by!]"
                    ],
                    "where": [
                        655
                    ]
                }
            ],
            "partner_description": [
                32
            ],
            "partner_email": [
                32
            ],
            "partner_name": [
                32
            ],
            "partner_operators": [
                699,
                {
                    "distinct_on": [
                        717,
                        "[partner_operator_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        715,
                        "[partner_operator_order_by!]"
                    ],
                    "where": [
                        706
                    ]
                }
            ],
            "partner_operators_aggregate": [
                700,
                {
                    "distinct_on": [
                        717,
                        "[partner_operator_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        715,
                        "[partner_operator_order_by!]"
                    ],
                    "where": [
                        706
                    ]
                }
            ],
            "partner_phone": [
                32
            ],
            "partner_step": [
                321
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_aggregate": {
            "aggregate": [
                640
            ],
            "nodes": [
                636
            ],
            "__typename": [
                32
            ]
        },
        "partner_aggregate_bool_exp": {
            "count": [
                639
            ],
            "__typename": [
                32
            ]
        },
        "partner_aggregate_bool_exp_count": {
            "arguments": [
                725
            ],
            "distinct": [
                3
            ],
            "filter": [
                643
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "partner_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        725,
                        "[partner_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                692
            ],
            "min": [
                694
            ],
            "__typename": [
                32
            ]
        },
        "partner_aggregate_order_by": {
            "count": [
                635
            ],
            "max": [
                693
            ],
            "min": [
                695
            ],
            "__typename": [
                32
            ]
        },
        "partner_arr_rel_insert_input": {
            "data": [
                691
            ],
            "on_conflict": [
                698
            ],
            "__typename": [
                32
            ]
        },
        "partner_bool_exp": {
            "_and": [
                643
            ],
            "_not": [
                643
            ],
            "_or": [
                643
            ],
            "created_at": [
                883
            ],
            "en_partner_step": [
                319
            ],
            "groups": [
                498
            ],
            "groups_aggregate": [
                489
            ],
            "id": [
                938
            ],
            "partner_address": [
                33
            ],
            "partner_campaigns": [
                655
            ],
            "partner_campaigns_aggregate": [
                646
            ],
            "partner_description": [
                33
            ],
            "partner_email": [
                33
            ],
            "partner_name": [
                33
            ],
            "partner_operators": [
                706
            ],
            "partner_operators_aggregate": [
                701
            ],
            "partner_phone": [
                33
            ],
            "partner_step": [
                322
            ],
            "updated_at": [
                883
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign": {
            "active": [
                3
            ],
            "campaign_description": [
                32
            ],
            "campaign_ending_date": [
                882
            ],
            "campaign_starting_date": [
                882
            ],
            "campaign_title": [
                32
            ],
            "contribution_amount": [
                633
            ],
            "created_at": [
                882
            ],
            "groups": [
                487,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "groups_aggregate": [
                488,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "id": [
                937
            ],
            "partner": [
                636
            ],
            "partner_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_aggregate": {
            "aggregate": [
                650
            ],
            "nodes": [
                644
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_aggregate_bool_exp": {
            "bool_and": [
                647
            ],
            "bool_or": [
                648
            ],
            "count": [
                649
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_aggregate_bool_exp_bool_and": {
            "arguments": [
                669
            ],
            "distinct": [
                3
            ],
            "filter": [
                655
            ],
            "predicate": [
                4
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_aggregate_bool_exp_bool_or": {
            "arguments": [
                670
            ],
            "distinct": [
                3
            ],
            "filter": [
                655
            ],
            "predicate": [
                4
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_aggregate_bool_exp_count": {
            "arguments": [
                668
            ],
            "distinct": [
                3
            ],
            "filter": [
                655
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_aggregate_fields": {
            "avg": [
                653
            ],
            "count": [
                22,
                {
                    "columns": [
                        668,
                        "[partner_campaign_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                659
            ],
            "min": [
                661
            ],
            "stddev": [
                672
            ],
            "stddev_pop": [
                674
            ],
            "stddev_samp": [
                676
            ],
            "sum": [
                680
            ],
            "var_pop": [
                684
            ],
            "var_samp": [
                686
            ],
            "variance": [
                688
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_aggregate_order_by": {
            "avg": [
                654
            ],
            "count": [
                635
            ],
            "max": [
                660
            ],
            "min": [
                662
            ],
            "stddev": [
                673
            ],
            "stddev_pop": [
                675
            ],
            "stddev_samp": [
                677
            ],
            "sum": [
                681
            ],
            "var_pop": [
                685
            ],
            "var_samp": [
                687
            ],
            "variance": [
                689
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_arr_rel_insert_input": {
            "data": [
                658
            ],
            "on_conflict": [
                665
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_avg_fields": {
            "contribution_amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_avg_order_by": {
            "contribution_amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_bool_exp": {
            "_and": [
                655
            ],
            "_not": [
                655
            ],
            "_or": [
                655
            ],
            "active": [
                4
            ],
            "campaign_description": [
                33
            ],
            "campaign_ending_date": [
                883
            ],
            "campaign_starting_date": [
                883
            ],
            "campaign_title": [
                33
            ],
            "contribution_amount": [
                634
            ],
            "created_at": [
                883
            ],
            "groups": [
                498
            ],
            "groups_aggregate": [
                489
            ],
            "id": [
                938
            ],
            "partner": [
                643
            ],
            "partner_id": [
                938
            ],
            "updated_at": [
                883
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_constraint": {},
        "partner_campaign_inc_input": {
            "contribution_amount": [
                633
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_insert_input": {
            "active": [
                3
            ],
            "campaign_description": [
                32
            ],
            "campaign_ending_date": [
                882
            ],
            "campaign_starting_date": [
                882
            ],
            "campaign_title": [
                32
            ],
            "contribution_amount": [
                633
            ],
            "created_at": [
                882
            ],
            "groups": [
                495
            ],
            "id": [
                937
            ],
            "partner": [
                697
            ],
            "partner_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_max_fields": {
            "campaign_description": [
                32
            ],
            "campaign_ending_date": [
                882
            ],
            "campaign_starting_date": [
                882
            ],
            "campaign_title": [
                32
            ],
            "contribution_amount": [
                633
            ],
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partner_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_max_order_by": {
            "campaign_description": [
                635
            ],
            "campaign_ending_date": [
                635
            ],
            "campaign_starting_date": [
                635
            ],
            "campaign_title": [
                635
            ],
            "contribution_amount": [
                635
            ],
            "created_at": [
                635
            ],
            "id": [
                635
            ],
            "partner_id": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_min_fields": {
            "campaign_description": [
                32
            ],
            "campaign_ending_date": [
                882
            ],
            "campaign_starting_date": [
                882
            ],
            "campaign_title": [
                32
            ],
            "contribution_amount": [
                633
            ],
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partner_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_min_order_by": {
            "campaign_description": [
                635
            ],
            "campaign_ending_date": [
                635
            ],
            "campaign_starting_date": [
                635
            ],
            "campaign_title": [
                635
            ],
            "contribution_amount": [
                635
            ],
            "created_at": [
                635
            ],
            "id": [
                635
            ],
            "partner_id": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                644
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_obj_rel_insert_input": {
            "data": [
                658
            ],
            "on_conflict": [
                665
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_on_conflict": {
            "constraint": [
                656
            ],
            "update_columns": [
                682
            ],
            "where": [
                655
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_order_by": {
            "active": [
                635
            ],
            "campaign_description": [
                635
            ],
            "campaign_ending_date": [
                635
            ],
            "campaign_starting_date": [
                635
            ],
            "campaign_title": [
                635
            ],
            "contribution_amount": [
                635
            ],
            "created_at": [
                635
            ],
            "groups_aggregate": [
                494
            ],
            "id": [
                635
            ],
            "partner": [
                723
            ],
            "partner_id": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_select_column": {},
        "partner_campaign_select_column_partner_campaign_aggregate_bool_exp_bool_and_arguments_columns": {},
        "partner_campaign_select_column_partner_campaign_aggregate_bool_exp_bool_or_arguments_columns": {},
        "partner_campaign_set_input": {
            "active": [
                3
            ],
            "campaign_description": [
                32
            ],
            "campaign_ending_date": [
                882
            ],
            "campaign_starting_date": [
                882
            ],
            "campaign_title": [
                32
            ],
            "contribution_amount": [
                633
            ],
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partner_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_stddev_fields": {
            "contribution_amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_stddev_order_by": {
            "contribution_amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_stddev_pop_fields": {
            "contribution_amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_stddev_pop_order_by": {
            "contribution_amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_stddev_samp_fields": {
            "contribution_amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_stddev_samp_order_by": {
            "contribution_amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_stream_cursor_input": {
            "initial_value": [
                679
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_stream_cursor_value_input": {
            "active": [
                3
            ],
            "campaign_description": [
                32
            ],
            "campaign_ending_date": [
                882
            ],
            "campaign_starting_date": [
                882
            ],
            "campaign_title": [
                32
            ],
            "contribution_amount": [
                633
            ],
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partner_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_sum_fields": {
            "contribution_amount": [
                633
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_sum_order_by": {
            "contribution_amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_update_column": {},
        "partner_campaign_updates": {
            "_inc": [
                657
            ],
            "_set": [
                671
            ],
            "where": [
                655
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_var_pop_fields": {
            "contribution_amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_var_pop_order_by": {
            "contribution_amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_var_samp_fields": {
            "contribution_amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_var_samp_order_by": {
            "contribution_amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_variance_fields": {
            "contribution_amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "partner_campaign_variance_order_by": {
            "contribution_amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_constraint": {},
        "partner_insert_input": {
            "created_at": [
                882
            ],
            "en_partner_step": [
                327
            ],
            "groups": [
                495
            ],
            "id": [
                937
            ],
            "partner_address": [
                32
            ],
            "partner_campaigns": [
                652
            ],
            "partner_description": [
                32
            ],
            "partner_email": [
                32
            ],
            "partner_name": [
                32
            ],
            "partner_operators": [
                705
            ],
            "partner_phone": [
                32
            ],
            "partner_step": [
                321
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_max_fields": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partner_address": [
                32
            ],
            "partner_description": [
                32
            ],
            "partner_email": [
                32
            ],
            "partner_name": [
                32
            ],
            "partner_phone": [
                32
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_max_order_by": {
            "created_at": [
                635
            ],
            "id": [
                635
            ],
            "partner_address": [
                635
            ],
            "partner_description": [
                635
            ],
            "partner_email": [
                635
            ],
            "partner_name": [
                635
            ],
            "partner_phone": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_min_fields": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partner_address": [
                32
            ],
            "partner_description": [
                32
            ],
            "partner_email": [
                32
            ],
            "partner_name": [
                32
            ],
            "partner_phone": [
                32
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_min_order_by": {
            "created_at": [
                635
            ],
            "id": [
                635
            ],
            "partner_address": [
                635
            ],
            "partner_description": [
                635
            ],
            "partner_email": [
                635
            ],
            "partner_name": [
                635
            ],
            "partner_phone": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                636
            ],
            "__typename": [
                32
            ]
        },
        "partner_obj_rel_insert_input": {
            "data": [
                691
            ],
            "on_conflict": [
                698
            ],
            "__typename": [
                32
            ]
        },
        "partner_on_conflict": {
            "constraint": [
                690
            ],
            "update_columns": [
                729
            ],
            "where": [
                643
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partner": [
                636
            ],
            "partnerid": [
                937
            ],
            "updated_at": [
                882
            ],
            "user": [
                903
            ],
            "userid": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_aggregate": {
            "aggregate": [
                703
            ],
            "nodes": [
                699
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_aggregate_bool_exp": {
            "count": [
                702
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_aggregate_bool_exp_count": {
            "arguments": [
                717
            ],
            "distinct": [
                3
            ],
            "filter": [
                706
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        717,
                        "[partner_operator_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                709
            ],
            "min": [
                711
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_aggregate_order_by": {
            "count": [
                635
            ],
            "max": [
                710
            ],
            "min": [
                712
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_arr_rel_insert_input": {
            "data": [
                708
            ],
            "on_conflict": [
                714
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_bool_exp": {
            "_and": [
                706
            ],
            "_not": [
                706
            ],
            "_or": [
                706
            ],
            "created_at": [
                883
            ],
            "id": [
                938
            ],
            "partner": [
                643
            ],
            "partnerid": [
                938
            ],
            "updated_at": [
                883
            ],
            "user": [
                913
            ],
            "userid": [
                938
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_constraint": {},
        "partner_operator_insert_input": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partner": [
                697
            ],
            "partnerid": [
                937
            ],
            "updated_at": [
                882
            ],
            "user": [
                924
            ],
            "userid": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_max_fields": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partnerid": [
                937
            ],
            "updated_at": [
                882
            ],
            "userid": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_max_order_by": {
            "created_at": [
                635
            ],
            "id": [
                635
            ],
            "partnerid": [
                635
            ],
            "updated_at": [
                635
            ],
            "userid": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_min_fields": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partnerid": [
                937
            ],
            "updated_at": [
                882
            ],
            "userid": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_min_order_by": {
            "created_at": [
                635
            ],
            "id": [
                635
            ],
            "partnerid": [
                635
            ],
            "updated_at": [
                635
            ],
            "userid": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                699
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_on_conflict": {
            "constraint": [
                707
            ],
            "update_columns": [
                721
            ],
            "where": [
                706
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_order_by": {
            "created_at": [
                635
            ],
            "id": [
                635
            ],
            "partner": [
                723
            ],
            "partnerid": [
                635
            ],
            "updated_at": [
                635
            ],
            "user": [
                926
            ],
            "userid": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_select_column": {},
        "partner_operator_set_input": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partnerid": [
                937
            ],
            "updated_at": [
                882
            ],
            "userid": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_stream_cursor_input": {
            "initial_value": [
                720
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_stream_cursor_value_input": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partnerid": [
                937
            ],
            "updated_at": [
                882
            ],
            "userid": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "partner_operator_update_column": {},
        "partner_operator_updates": {
            "_set": [
                718
            ],
            "where": [
                706
            ],
            "__typename": [
                32
            ]
        },
        "partner_order_by": {
            "created_at": [
                635
            ],
            "en_partner_step": [
                329
            ],
            "groups_aggregate": [
                494
            ],
            "id": [
                635
            ],
            "partner_address": [
                635
            ],
            "partner_campaigns_aggregate": [
                651
            ],
            "partner_description": [
                635
            ],
            "partner_email": [
                635
            ],
            "partner_name": [
                635
            ],
            "partner_operators_aggregate": [
                704
            ],
            "partner_phone": [
                635
            ],
            "partner_step": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "partner_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "partner_select_column": {},
        "partner_set_input": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partner_address": [
                32
            ],
            "partner_description": [
                32
            ],
            "partner_email": [
                32
            ],
            "partner_name": [
                32
            ],
            "partner_phone": [
                32
            ],
            "partner_step": [
                321
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_stream_cursor_input": {
            "initial_value": [
                728
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "partner_stream_cursor_value_input": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "partner_address": [
                32
            ],
            "partner_description": [
                32
            ],
            "partner_email": [
                32
            ],
            "partner_name": [
                32
            ],
            "partner_phone": [
                32
            ],
            "partner_step": [
                321
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "partner_update_column": {},
        "partner_updates": {
            "_set": [
                726
            ],
            "where": [
                643
            ],
            "__typename": [
                32
            ]
        },
        "payment": {
            "amount": [
                633
            ],
            "callback_response": [
                560,
                {
                    "path": [
                        32
                    ]
                }
            ],
            "cardinfo": [
                560,
                {
                    "path": [
                        32
                    ]
                }
            ],
            "created_at": [
                882
            ],
            "customer_id": [
                32
            ],
            "dest_customer_name": [
                32
            ],
            "dest_customer_phone": [
                32
            ],
            "en_currency": [
                274
            ],
            "enum_status": [
                400
            ],
            "enum_trans_type": [
                421
            ],
            "gateway_response": [
                560,
                {
                    "path": [
                        32
                    ]
                }
            ],
            "group": [
                487
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member": [
                563
            ],
            "member_id": [
                937
            ],
            "narration": [
                32
            ],
            "order_id": [
                937
            ],
            "paymentReviewsByPaymentId": [
                758,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "paymentReviewsByPaymentId_aggregate": [
                759,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_currency": [
                279
            ],
            "payment_provider": [
                337
            ],
            "payment_provider_id": [
                342
            ],
            "payment_reviews": [
                758,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_reviews_aggregate": [
                759,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "period": [
                820
            ],
            "period_id": [
                937
            ],
            "scheduled_at": [
                882
            ],
            "source_customer_name": [
                32
            ],
            "source_customer_phone": [
                32
            ],
            "temp": [
                560,
                {
                    "path": [
                        32
                    ]
                }
            ],
            "transaction_status": [
                405
            ],
            "transaction_type": [
                426
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_aggregate": {
            "aggregate": [
                735
            ],
            "nodes": [
                731
            ],
            "__typename": [
                32
            ]
        },
        "payment_aggregate_bool_exp": {
            "count": [
                734
            ],
            "__typename": [
                32
            ]
        },
        "payment_aggregate_bool_exp_count": {
            "arguments": [
                800
            ],
            "distinct": [
                3
            ],
            "filter": [
                741
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "payment_aggregate_fields": {
            "avg": [
                739
            ],
            "count": [
                22,
                {
                    "columns": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                748
            ],
            "min": [
                750
            ],
            "stddev": [
                802
            ],
            "stddev_pop": [
                804
            ],
            "stddev_samp": [
                806
            ],
            "sum": [
                810
            ],
            "var_pop": [
                814
            ],
            "var_samp": [
                816
            ],
            "variance": [
                818
            ],
            "__typename": [
                32
            ]
        },
        "payment_aggregate_order_by": {
            "avg": [
                740
            ],
            "count": [
                635
            ],
            "max": [
                749
            ],
            "min": [
                751
            ],
            "stddev": [
                803
            ],
            "stddev_pop": [
                805
            ],
            "stddev_samp": [
                807
            ],
            "sum": [
                811
            ],
            "var_pop": [
                815
            ],
            "var_samp": [
                817
            ],
            "variance": [
                819
            ],
            "__typename": [
                32
            ]
        },
        "payment_append_input": {
            "callback_response": [
                560
            ],
            "cardinfo": [
                560
            ],
            "gateway_response": [
                560
            ],
            "temp": [
                560
            ],
            "__typename": [
                32
            ]
        },
        "payment_arr_rel_insert_input": {
            "data": [
                747
            ],
            "on_conflict": [
                754
            ],
            "__typename": [
                32
            ]
        },
        "payment_avg_fields": {
            "amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_avg_order_by": {
            "amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_bool_exp": {
            "_and": [
                741
            ],
            "_not": [
                741
            ],
            "_or": [
                741
            ],
            "amount": [
                634
            ],
            "callback_response": [
                562
            ],
            "cardinfo": [
                562
            ],
            "created_at": [
                883
            ],
            "customer_id": [
                33
            ],
            "dest_customer_name": [
                33
            ],
            "dest_customer_phone": [
                33
            ],
            "en_currency": [
                277
            ],
            "enum_status": [
                403
            ],
            "enum_trans_type": [
                424
            ],
            "gateway_response": [
                562
            ],
            "group": [
                498
            ],
            "group_id": [
                938
            ],
            "id": [
                938
            ],
            "member": [
                572
            ],
            "member_id": [
                938
            ],
            "narration": [
                33
            ],
            "order_id": [
                938
            ],
            "paymentReviewsByPaymentId": [
                767
            ],
            "paymentReviewsByPaymentId_aggregate": [
                760
            ],
            "payment_currency": [
                280
            ],
            "payment_provider": [
                340
            ],
            "payment_provider_id": [
                343
            ],
            "payment_reviews": [
                767
            ],
            "payment_reviews_aggregate": [
                760
            ],
            "period": [
                829
            ],
            "period_id": [
                938
            ],
            "scheduled_at": [
                883
            ],
            "source_customer_name": [
                33
            ],
            "source_customer_phone": [
                33
            ],
            "temp": [
                562
            ],
            "transaction_status": [
                406
            ],
            "transaction_type": [
                427
            ],
            "updated_at": [
                883
            ],
            "__typename": [
                32
            ]
        },
        "payment_constraint": {},
        "payment_delete_at_path_input": {
            "callback_response": [
                32
            ],
            "cardinfo": [
                32
            ],
            "gateway_response": [
                32
            ],
            "temp": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "payment_delete_elem_input": {
            "callback_response": [
                22
            ],
            "cardinfo": [
                22
            ],
            "gateway_response": [
                22
            ],
            "temp": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "payment_delete_key_input": {
            "callback_response": [
                32
            ],
            "cardinfo": [
                32
            ],
            "gateway_response": [
                32
            ],
            "temp": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "payment_inc_input": {
            "amount": [
                633
            ],
            "__typename": [
                32
            ]
        },
        "payment_insert_input": {
            "amount": [
                633
            ],
            "callback_response": [
                560
            ],
            "cardinfo": [
                560
            ],
            "created_at": [
                882
            ],
            "customer_id": [
                32
            ],
            "dest_customer_name": [
                32
            ],
            "dest_customer_phone": [
                32
            ],
            "en_currency": [
                285
            ],
            "enum_status": [
                411
            ],
            "enum_trans_type": [
                432
            ],
            "gateway_response": [
                560
            ],
            "group": [
                507
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member": [
                581
            ],
            "member_id": [
                937
            ],
            "narration": [
                32
            ],
            "order_id": [
                937
            ],
            "paymentReviewsByPaymentId": [
                764
            ],
            "payment_currency": [
                279
            ],
            "payment_provider": [
                348
            ],
            "payment_provider_id": [
                342
            ],
            "payment_reviews": [
                764
            ],
            "period": [
                838
            ],
            "period_id": [
                937
            ],
            "scheduled_at": [
                882
            ],
            "source_customer_name": [
                32
            ],
            "source_customer_phone": [
                32
            ],
            "temp": [
                560
            ],
            "transaction_status": [
                405
            ],
            "transaction_type": [
                426
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_max_fields": {
            "amount": [
                633
            ],
            "created_at": [
                882
            ],
            "customer_id": [
                32
            ],
            "dest_customer_name": [
                32
            ],
            "dest_customer_phone": [
                32
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member_id": [
                937
            ],
            "narration": [
                32
            ],
            "order_id": [
                937
            ],
            "period_id": [
                937
            ],
            "scheduled_at": [
                882
            ],
            "source_customer_name": [
                32
            ],
            "source_customer_phone": [
                32
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_max_order_by": {
            "amount": [
                635
            ],
            "created_at": [
                635
            ],
            "customer_id": [
                635
            ],
            "dest_customer_name": [
                635
            ],
            "dest_customer_phone": [
                635
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "member_id": [
                635
            ],
            "narration": [
                635
            ],
            "order_id": [
                635
            ],
            "period_id": [
                635
            ],
            "scheduled_at": [
                635
            ],
            "source_customer_name": [
                635
            ],
            "source_customer_phone": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_min_fields": {
            "amount": [
                633
            ],
            "created_at": [
                882
            ],
            "customer_id": [
                32
            ],
            "dest_customer_name": [
                32
            ],
            "dest_customer_phone": [
                32
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member_id": [
                937
            ],
            "narration": [
                32
            ],
            "order_id": [
                937
            ],
            "period_id": [
                937
            ],
            "scheduled_at": [
                882
            ],
            "source_customer_name": [
                32
            ],
            "source_customer_phone": [
                32
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_min_order_by": {
            "amount": [
                635
            ],
            "created_at": [
                635
            ],
            "customer_id": [
                635
            ],
            "dest_customer_name": [
                635
            ],
            "dest_customer_phone": [
                635
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "member_id": [
                635
            ],
            "narration": [
                635
            ],
            "order_id": [
                635
            ],
            "period_id": [
                635
            ],
            "scheduled_at": [
                635
            ],
            "source_customer_name": [
                635
            ],
            "source_customer_phone": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                731
            ],
            "__typename": [
                32
            ]
        },
        "payment_obj_rel_insert_input": {
            "data": [
                747
            ],
            "on_conflict": [
                754
            ],
            "__typename": [
                32
            ]
        },
        "payment_on_conflict": {
            "constraint": [
                742
            ],
            "update_columns": [
                812
            ],
            "where": [
                741
            ],
            "__typename": [
                32
            ]
        },
        "payment_order_by": {
            "amount": [
                635
            ],
            "callback_response": [
                635
            ],
            "cardinfo": [
                635
            ],
            "created_at": [
                635
            ],
            "customer_id": [
                635
            ],
            "dest_customer_name": [
                635
            ],
            "dest_customer_phone": [
                635
            ],
            "en_currency": [
                287
            ],
            "enum_status": [
                413
            ],
            "enum_trans_type": [
                434
            ],
            "gateway_response": [
                635
            ],
            "group": [
                509
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "member": [
                583
            ],
            "member_id": [
                635
            ],
            "narration": [
                635
            ],
            "order_id": [
                635
            ],
            "paymentReviewsByPaymentId_aggregate": [
                763
            ],
            "payment_currency": [
                635
            ],
            "payment_provider": [
                350
            ],
            "payment_provider_id": [
                635
            ],
            "payment_reviews_aggregate": [
                763
            ],
            "period": [
                840
            ],
            "period_id": [
                635
            ],
            "scheduled_at": [
                635
            ],
            "source_customer_name": [
                635
            ],
            "source_customer_phone": [
                635
            ],
            "temp": [
                635
            ],
            "transaction_status": [
                635
            ],
            "transaction_type": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "payment_prepend_input": {
            "callback_response": [
                560
            ],
            "cardinfo": [
                560
            ],
            "gateway_response": [
                560
            ],
            "temp": [
                560
            ],
            "__typename": [
                32
            ]
        },
        "payment_review": {
            "created_at": [
                882
            ],
            "en_permission": [
                358
            ],
            "group": [
                487
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "index": [
                22
            ],
            "notes": [
                32
            ],
            "notifications": [
                605,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "notifications_aggregate": [
                606,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "payment": [
                731
            ],
            "payment_id": [
                937
            ],
            "period": [
                820
            ],
            "period_id": [
                937
            ],
            "requester": [
                563
            ],
            "requester_id": [
                937
            ],
            "response": [
                363
            ],
            "reviewer": [
                563
            ],
            "reviewer_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_aggregate": {
            "aggregate": [
                762
            ],
            "nodes": [
                758
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_aggregate_bool_exp": {
            "count": [
                761
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_aggregate_bool_exp_count": {
            "arguments": [
                780
            ],
            "distinct": [
                3
            ],
            "filter": [
                767
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_aggregate_fields": {
            "avg": [
                765
            ],
            "count": [
                22,
                {
                    "columns": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                771
            ],
            "min": [
                773
            ],
            "stddev": [
                782
            ],
            "stddev_pop": [
                784
            ],
            "stddev_samp": [
                786
            ],
            "sum": [
                790
            ],
            "var_pop": [
                794
            ],
            "var_samp": [
                796
            ],
            "variance": [
                798
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_aggregate_order_by": {
            "avg": [
                766
            ],
            "count": [
                635
            ],
            "max": [
                772
            ],
            "min": [
                774
            ],
            "stddev": [
                783
            ],
            "stddev_pop": [
                785
            ],
            "stddev_samp": [
                787
            ],
            "sum": [
                791
            ],
            "var_pop": [
                795
            ],
            "var_samp": [
                797
            ],
            "variance": [
                799
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_arr_rel_insert_input": {
            "data": [
                770
            ],
            "on_conflict": [
                777
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_avg_fields": {
            "index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_avg_order_by": {
            "index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_bool_exp": {
            "_and": [
                767
            ],
            "_not": [
                767
            ],
            "_or": [
                767
            ],
            "created_at": [
                883
            ],
            "en_permission": [
                361
            ],
            "group": [
                498
            ],
            "group_id": [
                938
            ],
            "id": [
                938
            ],
            "index": [
                23
            ],
            "notes": [
                33
            ],
            "notifications": [
                614
            ],
            "notifications_aggregate": [
                607
            ],
            "payment": [
                741
            ],
            "payment_id": [
                938
            ],
            "period": [
                829
            ],
            "period_id": [
                938
            ],
            "requester": [
                572
            ],
            "requester_id": [
                938
            ],
            "response": [
                364
            ],
            "reviewer": [
                572
            ],
            "reviewer_id": [
                938
            ],
            "updated_at": [
                883
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_constraint": {},
        "payment_review_inc_input": {
            "index": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_insert_input": {
            "created_at": [
                882
            ],
            "en_permission": [
                369
            ],
            "group": [
                507
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "index": [
                22
            ],
            "notes": [
                32
            ],
            "notifications": [
                613
            ],
            "payment": [
                753
            ],
            "payment_id": [
                937
            ],
            "period": [
                838
            ],
            "period_id": [
                937
            ],
            "requester": [
                581
            ],
            "requester_id": [
                937
            ],
            "response": [
                363
            ],
            "reviewer": [
                581
            ],
            "reviewer_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_max_fields": {
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "index": [
                22
            ],
            "notes": [
                32
            ],
            "payment_id": [
                937
            ],
            "period_id": [
                937
            ],
            "requester_id": [
                937
            ],
            "reviewer_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_max_order_by": {
            "created_at": [
                635
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "index": [
                635
            ],
            "notes": [
                635
            ],
            "payment_id": [
                635
            ],
            "period_id": [
                635
            ],
            "requester_id": [
                635
            ],
            "reviewer_id": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_min_fields": {
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "index": [
                22
            ],
            "notes": [
                32
            ],
            "payment_id": [
                937
            ],
            "period_id": [
                937
            ],
            "requester_id": [
                937
            ],
            "reviewer_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_min_order_by": {
            "created_at": [
                635
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "index": [
                635
            ],
            "notes": [
                635
            ],
            "payment_id": [
                635
            ],
            "period_id": [
                635
            ],
            "requester_id": [
                635
            ],
            "reviewer_id": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                758
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_obj_rel_insert_input": {
            "data": [
                770
            ],
            "on_conflict": [
                777
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_on_conflict": {
            "constraint": [
                768
            ],
            "update_columns": [
                792
            ],
            "where": [
                767
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_order_by": {
            "created_at": [
                635
            ],
            "en_permission": [
                371
            ],
            "group": [
                509
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "index": [
                635
            ],
            "notes": [
                635
            ],
            "notifications_aggregate": [
                612
            ],
            "payment": [
                755
            ],
            "payment_id": [
                635
            ],
            "period": [
                840
            ],
            "period_id": [
                635
            ],
            "requester": [
                583
            ],
            "requester_id": [
                635
            ],
            "response": [
                635
            ],
            "reviewer": [
                583
            ],
            "reviewer_id": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_select_column": {},
        "payment_review_set_input": {
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "index": [
                22
            ],
            "notes": [
                32
            ],
            "payment_id": [
                937
            ],
            "period_id": [
                937
            ],
            "requester_id": [
                937
            ],
            "response": [
                363
            ],
            "reviewer_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_stddev_fields": {
            "index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_stddev_order_by": {
            "index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_stddev_pop_fields": {
            "index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_stddev_pop_order_by": {
            "index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_stddev_samp_fields": {
            "index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_stddev_samp_order_by": {
            "index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_stream_cursor_input": {
            "initial_value": [
                789
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_stream_cursor_value_input": {
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "index": [
                22
            ],
            "notes": [
                32
            ],
            "payment_id": [
                937
            ],
            "period_id": [
                937
            ],
            "requester_id": [
                937
            ],
            "response": [
                363
            ],
            "reviewer_id": [
                937
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_sum_fields": {
            "index": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_sum_order_by": {
            "index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_update_column": {},
        "payment_review_updates": {
            "_inc": [
                769
            ],
            "_set": [
                781
            ],
            "where": [
                767
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_var_pop_fields": {
            "index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_var_pop_order_by": {
            "index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_var_samp_fields": {
            "index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_var_samp_order_by": {
            "index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_variance_fields": {
            "index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_review_variance_order_by": {
            "index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_select_column": {},
        "payment_set_input": {
            "amount": [
                633
            ],
            "callback_response": [
                560
            ],
            "cardinfo": [
                560
            ],
            "created_at": [
                882
            ],
            "customer_id": [
                32
            ],
            "dest_customer_name": [
                32
            ],
            "dest_customer_phone": [
                32
            ],
            "gateway_response": [
                560
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member_id": [
                937
            ],
            "narration": [
                32
            ],
            "order_id": [
                937
            ],
            "payment_currency": [
                279
            ],
            "payment_provider_id": [
                342
            ],
            "period_id": [
                937
            ],
            "scheduled_at": [
                882
            ],
            "source_customer_name": [
                32
            ],
            "source_customer_phone": [
                32
            ],
            "temp": [
                560
            ],
            "transaction_status": [
                405
            ],
            "transaction_type": [
                426
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_stddev_fields": {
            "amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_stddev_order_by": {
            "amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_stddev_pop_fields": {
            "amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_stddev_pop_order_by": {
            "amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_stddev_samp_fields": {
            "amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_stddev_samp_order_by": {
            "amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_stream_cursor_input": {
            "initial_value": [
                809
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "payment_stream_cursor_value_input": {
            "amount": [
                633
            ],
            "callback_response": [
                560
            ],
            "cardinfo": [
                560
            ],
            "created_at": [
                882
            ],
            "customer_id": [
                32
            ],
            "dest_customer_name": [
                32
            ],
            "dest_customer_phone": [
                32
            ],
            "gateway_response": [
                560
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member_id": [
                937
            ],
            "narration": [
                32
            ],
            "order_id": [
                937
            ],
            "payment_currency": [
                279
            ],
            "payment_provider_id": [
                342
            ],
            "period_id": [
                937
            ],
            "scheduled_at": [
                882
            ],
            "source_customer_name": [
                32
            ],
            "source_customer_phone": [
                32
            ],
            "temp": [
                560
            ],
            "transaction_status": [
                405
            ],
            "transaction_type": [
                426
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "payment_sum_fields": {
            "amount": [
                633
            ],
            "__typename": [
                32
            ]
        },
        "payment_sum_order_by": {
            "amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_update_column": {},
        "payment_updates": {
            "_append": [
                737
            ],
            "_delete_at_path": [
                743
            ],
            "_delete_elem": [
                744
            ],
            "_delete_key": [
                745
            ],
            "_inc": [
                746
            ],
            "_prepend": [
                757
            ],
            "_set": [
                801
            ],
            "where": [
                741
            ],
            "__typename": [
                32
            ]
        },
        "payment_var_pop_fields": {
            "amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_var_pop_order_by": {
            "amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_var_samp_fields": {
            "amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_var_samp_order_by": {
            "amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "payment_variance_fields": {
            "amount": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "payment_variance_order_by": {
            "amount": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period": {
            "completed_at": [
                882
            ],
            "created_at": [
                882
            ],
            "group": [
                487
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member": [
                563
            ],
            "member_id": [
                937
            ],
            "notifications": [
                605,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "notifications_aggregate": [
                606,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "payment_requests": [
                758,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_requests_aggregate": [
                759,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payments": [
                731,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payments_aggregate": [
                732,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "period_index": [
                22
            ],
            "reminder_index": [
                22
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "period_aggregate": {
            "aggregate": [
                824
            ],
            "nodes": [
                820
            ],
            "__typename": [
                32
            ]
        },
        "period_aggregate_bool_exp": {
            "count": [
                823
            ],
            "__typename": [
                32
            ]
        },
        "period_aggregate_bool_exp_count": {
            "arguments": [
                842
            ],
            "distinct": [
                3
            ],
            "filter": [
                829
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "period_aggregate_fields": {
            "avg": [
                827
            ],
            "count": [
                22,
                {
                    "columns": [
                        842,
                        "[period_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                833
            ],
            "min": [
                835
            ],
            "stddev": [
                844
            ],
            "stddev_pop": [
                846
            ],
            "stddev_samp": [
                848
            ],
            "sum": [
                852
            ],
            "var_pop": [
                856
            ],
            "var_samp": [
                858
            ],
            "variance": [
                860
            ],
            "__typename": [
                32
            ]
        },
        "period_aggregate_order_by": {
            "avg": [
                828
            ],
            "count": [
                635
            ],
            "max": [
                834
            ],
            "min": [
                836
            ],
            "stddev": [
                845
            ],
            "stddev_pop": [
                847
            ],
            "stddev_samp": [
                849
            ],
            "sum": [
                853
            ],
            "var_pop": [
                857
            ],
            "var_samp": [
                859
            ],
            "variance": [
                861
            ],
            "__typename": [
                32
            ]
        },
        "period_arr_rel_insert_input": {
            "data": [
                832
            ],
            "on_conflict": [
                839
            ],
            "__typename": [
                32
            ]
        },
        "period_avg_fields": {
            "period_index": [
                21
            ],
            "reminder_index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "period_avg_order_by": {
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period_bool_exp": {
            "_and": [
                829
            ],
            "_not": [
                829
            ],
            "_or": [
                829
            ],
            "completed_at": [
                883
            ],
            "created_at": [
                883
            ],
            "group": [
                498
            ],
            "group_id": [
                938
            ],
            "id": [
                938
            ],
            "member": [
                572
            ],
            "member_id": [
                938
            ],
            "notifications": [
                614
            ],
            "notifications_aggregate": [
                607
            ],
            "payment_requests": [
                767
            ],
            "payment_requests_aggregate": [
                760
            ],
            "payments": [
                741
            ],
            "payments_aggregate": [
                733
            ],
            "period_index": [
                23
            ],
            "reminder_index": [
                23
            ],
            "updated_at": [
                883
            ],
            "__typename": [
                32
            ]
        },
        "period_constraint": {},
        "period_inc_input": {
            "period_index": [
                22
            ],
            "reminder_index": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "period_insert_input": {
            "completed_at": [
                882
            ],
            "created_at": [
                882
            ],
            "group": [
                507
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member": [
                581
            ],
            "member_id": [
                937
            ],
            "notifications": [
                613
            ],
            "payment_requests": [
                764
            ],
            "payments": [
                738
            ],
            "period_index": [
                22
            ],
            "reminder_index": [
                22
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "period_max_fields": {
            "completed_at": [
                882
            ],
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member_id": [
                937
            ],
            "period_index": [
                22
            ],
            "reminder_index": [
                22
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "period_max_order_by": {
            "completed_at": [
                635
            ],
            "created_at": [
                635
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "member_id": [
                635
            ],
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period_min_fields": {
            "completed_at": [
                882
            ],
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member_id": [
                937
            ],
            "period_index": [
                22
            ],
            "reminder_index": [
                22
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "period_min_order_by": {
            "completed_at": [
                635
            ],
            "created_at": [
                635
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "member_id": [
                635
            ],
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                820
            ],
            "__typename": [
                32
            ]
        },
        "period_obj_rel_insert_input": {
            "data": [
                832
            ],
            "on_conflict": [
                839
            ],
            "__typename": [
                32
            ]
        },
        "period_on_conflict": {
            "constraint": [
                830
            ],
            "update_columns": [
                854
            ],
            "where": [
                829
            ],
            "__typename": [
                32
            ]
        },
        "period_order_by": {
            "completed_at": [
                635
            ],
            "created_at": [
                635
            ],
            "group": [
                509
            ],
            "group_id": [
                635
            ],
            "id": [
                635
            ],
            "member": [
                583
            ],
            "member_id": [
                635
            ],
            "notifications_aggregate": [
                612
            ],
            "payment_requests_aggregate": [
                763
            ],
            "payments_aggregate": [
                736
            ],
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "period_select_column": {},
        "period_set_input": {
            "completed_at": [
                882
            ],
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member_id": [
                937
            ],
            "period_index": [
                22
            ],
            "reminder_index": [
                22
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "period_stddev_fields": {
            "period_index": [
                21
            ],
            "reminder_index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "period_stddev_order_by": {
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period_stddev_pop_fields": {
            "period_index": [
                21
            ],
            "reminder_index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "period_stddev_pop_order_by": {
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period_stddev_samp_fields": {
            "period_index": [
                21
            ],
            "reminder_index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "period_stddev_samp_order_by": {
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period_stream_cursor_input": {
            "initial_value": [
                851
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "period_stream_cursor_value_input": {
            "completed_at": [
                882
            ],
            "created_at": [
                882
            ],
            "group_id": [
                937
            ],
            "id": [
                937
            ],
            "member_id": [
                937
            ],
            "period_index": [
                22
            ],
            "reminder_index": [
                22
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "period_sum_fields": {
            "period_index": [
                22
            ],
            "reminder_index": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "period_sum_order_by": {
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period_update_column": {},
        "period_updates": {
            "_inc": [
                831
            ],
            "_set": [
                843
            ],
            "where": [
                829
            ],
            "__typename": [
                32
            ]
        },
        "period_var_pop_fields": {
            "period_index": [
                21
            ],
            "reminder_index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "period_var_pop_order_by": {
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period_var_samp_fields": {
            "period_index": [
                21
            ],
            "reminder_index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "period_var_samp_order_by": {
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "period_variance_fields": {
            "period_index": [
                21
            ],
            "reminder_index": [
                21
            ],
            "__typename": [
                32
            ]
        },
        "period_variance_order_by": {
            "period_index": [
                635
            ],
            "reminder_index": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "state_cache": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "ref_id": [
                937
            ],
            "state": [
                32
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_aggregate": {
            "aggregate": [
                864
            ],
            "nodes": [
                862
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        874,
                        "[state_cache_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                868
            ],
            "min": [
                869
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_bool_exp": {
            "_and": [
                865
            ],
            "_not": [
                865
            ],
            "_or": [
                865
            ],
            "created_at": [
                883
            ],
            "id": [
                938
            ],
            "ref_id": [
                938
            ],
            "state": [
                33
            ],
            "updated_at": [
                883
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_constraint": {},
        "state_cache_insert_input": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "ref_id": [
                937
            ],
            "state": [
                32
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_max_fields": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "ref_id": [
                937
            ],
            "state": [
                32
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_min_fields": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "ref_id": [
                937
            ],
            "state": [
                32
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                862
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_on_conflict": {
            "constraint": [
                866
            ],
            "update_columns": [
                878
            ],
            "where": [
                865
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_order_by": {
            "created_at": [
                635
            ],
            "id": [
                635
            ],
            "ref_id": [
                635
            ],
            "state": [
                635
            ],
            "updated_at": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_select_column": {},
        "state_cache_set_input": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "ref_id": [
                937
            ],
            "state": [
                32
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_stream_cursor_input": {
            "initial_value": [
                877
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_stream_cursor_value_input": {
            "created_at": [
                882
            ],
            "id": [
                937
            ],
            "ref_id": [
                937
            ],
            "state": [
                32
            ],
            "updated_at": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "state_cache_update_column": {},
        "state_cache_updates": {
            "_set": [
                875
            ],
            "where": [
                865
            ],
            "__typename": [
                32
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                880
            ],
            "_gt": [
                880
            ],
            "_gte": [
                880
            ],
            "_in": [
                880
            ],
            "_is_null": [
                3
            ],
            "_lt": [
                880
            ],
            "_lte": [
                880
            ],
            "_neq": [
                880
            ],
            "_nin": [
                880
            ],
            "__typename": [
                32
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                882
            ],
            "_gt": [
                882
            ],
            "_gte": [
                882
            ],
            "_in": [
                882
            ],
            "_is_null": [
                3
            ],
            "_lt": [
                882
            ],
            "_lte": [
                882
            ],
            "_neq": [
                882
            ],
            "_nin": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "user_profile": {
            "clerk_id": [
                32
            ],
            "country_code": [
                32
            ],
            "created_at": [
                882
            ],
            "expo_push_token": [
                32
            ],
            "id": [
                937
            ],
            "invitation_url": [
                32
            ],
            "updated_at": [
                882
            ],
            "user": [
                903
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_aggregate": {
            "aggregate": [
                886
            ],
            "nodes": [
                884
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        897,
                        "[user_profile_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                890
            ],
            "min": [
                891
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_bool_exp": {
            "_and": [
                887
            ],
            "_not": [
                887
            ],
            "_or": [
                887
            ],
            "clerk_id": [
                33
            ],
            "country_code": [
                33
            ],
            "created_at": [
                883
            ],
            "expo_push_token": [
                33
            ],
            "id": [
                938
            ],
            "invitation_url": [
                33
            ],
            "updated_at": [
                883
            ],
            "user": [
                913
            ],
            "user_id": [
                938
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_constraint": {},
        "user_profile_insert_input": {
            "clerk_id": [
                32
            ],
            "country_code": [
                32
            ],
            "created_at": [
                882
            ],
            "expo_push_token": [
                32
            ],
            "id": [
                937
            ],
            "invitation_url": [
                32
            ],
            "updated_at": [
                882
            ],
            "user": [
                924
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_max_fields": {
            "clerk_id": [
                32
            ],
            "country_code": [
                32
            ],
            "created_at": [
                882
            ],
            "expo_push_token": [
                32
            ],
            "id": [
                937
            ],
            "invitation_url": [
                32
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_min_fields": {
            "clerk_id": [
                32
            ],
            "country_code": [
                32
            ],
            "created_at": [
                882
            ],
            "expo_push_token": [
                32
            ],
            "id": [
                937
            ],
            "invitation_url": [
                32
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                884
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_obj_rel_insert_input": {
            "data": [
                889
            ],
            "on_conflict": [
                894
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_on_conflict": {
            "constraint": [
                888
            ],
            "update_columns": [
                901
            ],
            "where": [
                887
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_order_by": {
            "clerk_id": [
                635
            ],
            "country_code": [
                635
            ],
            "created_at": [
                635
            ],
            "expo_push_token": [
                635
            ],
            "id": [
                635
            ],
            "invitation_url": [
                635
            ],
            "updated_at": [
                635
            ],
            "user": [
                926
            ],
            "user_id": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_select_column": {},
        "user_profile_set_input": {
            "clerk_id": [
                32
            ],
            "country_code": [
                32
            ],
            "created_at": [
                882
            ],
            "expo_push_token": [
                32
            ],
            "id": [
                937
            ],
            "invitation_url": [
                32
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_stream_cursor_input": {
            "initial_value": [
                900
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_stream_cursor_value_input": {
            "clerk_id": [
                32
            ],
            "country_code": [
                32
            ],
            "created_at": [
                882
            ],
            "expo_push_token": [
                32
            ],
            "id": [
                937
            ],
            "invitation_url": [
                32
            ],
            "updated_at": [
                882
            ],
            "user_id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "user_profile_update_column": {},
        "user_profile_updates": {
            "_set": [
                898
            ],
            "where": [
                887
            ],
            "__typename": [
                32
            ]
        },
        "users": {
            "activeMfaType": [
                32
            ],
            "avatarUrl": [
                32
            ],
            "createdAt": [
                882
            ],
            "currentChallenge": [
                32
            ],
            "defaultRole": [
                32
            ],
            "defaultRoleByRole": [
                104
            ],
            "disabled": [
                3
            ],
            "displayName": [
                32
            ],
            "email": [
                271
            ],
            "emailVerified": [
                3
            ],
            "groups": [
                487,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "groups_aggregate": [
                488,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "id": [
                937
            ],
            "invitations": [
                533,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "invitationsBySenderId": [
                533,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "invitationsBySenderId_aggregate": [
                534,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "invitations_aggregate": [
                534,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "isAnonymous": [
                3
            ],
            "lastSeen": [
                882
            ],
            "locale": [
                32
            ],
            "members": [
                563,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "members_aggregate": [
                564,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "metadata": [
                560,
                {
                    "path": [
                        32
                    ]
                }
            ],
            "newEmail": [
                271
            ],
            "notifications": [
                605,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "notifications_aggregate": [
                606,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "otpHash": [
                32
            ],
            "otpHashExpiresAt": [
                882
            ],
            "otpMethodLastUsed": [
                32
            ],
            "partner_operators": [
                699,
                {
                    "distinct_on": [
                        717,
                        "[partner_operator_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        715,
                        "[partner_operator_order_by!]"
                    ],
                    "where": [
                        706
                    ]
                }
            ],
            "partner_operators_aggregate": [
                700,
                {
                    "distinct_on": [
                        717,
                        "[partner_operator_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        715,
                        "[partner_operator_order_by!]"
                    ],
                    "where": [
                        706
                    ]
                }
            ],
            "passwordHash": [
                32
            ],
            "phoneNumber": [
                32
            ],
            "phoneNumberVerified": [
                3
            ],
            "refreshTokens": [
                80,
                {
                    "distinct_on": [
                        98,
                        "[authRefreshTokens_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        96,
                        "[authRefreshTokens_order_by!]"
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "refreshTokens_aggregate": [
                81,
                {
                    "distinct_on": [
                        98,
                        "[authRefreshTokens_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        96,
                        "[authRefreshTokens_order_by!]"
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "roles": [
                147,
                {
                    "distinct_on": [
                        165,
                        "[authUserRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        163,
                        "[authUserRoles_order_by!]"
                    ],
                    "where": [
                        154
                    ]
                }
            ],
            "roles_aggregate": [
                148,
                {
                    "distinct_on": [
                        165,
                        "[authUserRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        163,
                        "[authUserRoles_order_by!]"
                    ],
                    "where": [
                        154
                    ]
                }
            ],
            "securityKeys": [
                171,
                {
                    "distinct_on": [
                        192,
                        "[authUserSecurityKeys_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        190,
                        "[authUserSecurityKeys_order_by!]"
                    ],
                    "where": [
                        180
                    ]
                }
            ],
            "securityKeys_aggregate": [
                172,
                {
                    "distinct_on": [
                        192,
                        "[authUserSecurityKeys_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        190,
                        "[authUserSecurityKeys_order_by!]"
                    ],
                    "where": [
                        180
                    ]
                }
            ],
            "ticket": [
                32
            ],
            "ticketExpiresAt": [
                882
            ],
            "totpSecret": [
                32
            ],
            "updatedAt": [
                882
            ],
            "userProviders": [
                123,
                {
                    "distinct_on": [
                        141,
                        "[authUserProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        139,
                        "[authUserProviders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "userProviders_aggregate": [
                124,
                {
                    "distinct_on": [
                        141,
                        "[authUserProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        139,
                        "[authUserProviders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "user_profile": [
                884
            ],
            "__typename": [
                32
            ]
        },
        "users_aggregate": {
            "aggregate": [
                909
            ],
            "nodes": [
                903
            ],
            "__typename": [
                32
            ]
        },
        "users_aggregate_bool_exp": {
            "bool_and": [
                906
            ],
            "bool_or": [
                907
            ],
            "count": [
                908
            ],
            "__typename": [
                32
            ]
        },
        "users_aggregate_bool_exp_bool_and": {
            "arguments": [
                930
            ],
            "distinct": [
                3
            ],
            "filter": [
                913
            ],
            "predicate": [
                4
            ],
            "__typename": [
                32
            ]
        },
        "users_aggregate_bool_exp_bool_or": {
            "arguments": [
                931
            ],
            "distinct": [
                3
            ],
            "filter": [
                913
            ],
            "predicate": [
                4
            ],
            "__typename": [
                32
            ]
        },
        "users_aggregate_bool_exp_count": {
            "arguments": [
                929
            ],
            "distinct": [
                3
            ],
            "filter": [
                913
            ],
            "predicate": [
                23
            ],
            "__typename": [
                32
            ]
        },
        "users_aggregate_fields": {
            "count": [
                22,
                {
                    "columns": [
                        929,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        3
                    ]
                }
            ],
            "max": [
                919
            ],
            "min": [
                921
            ],
            "__typename": [
                32
            ]
        },
        "users_aggregate_order_by": {
            "count": [
                635
            ],
            "max": [
                920
            ],
            "min": [
                922
            ],
            "__typename": [
                32
            ]
        },
        "users_append_input": {
            "metadata": [
                560
            ],
            "__typename": [
                32
            ]
        },
        "users_arr_rel_insert_input": {
            "data": [
                918
            ],
            "on_conflict": [
                925
            ],
            "__typename": [
                32
            ]
        },
        "users_bool_exp": {
            "_and": [
                913
            ],
            "_not": [
                913
            ],
            "_or": [
                913
            ],
            "activeMfaType": [
                33
            ],
            "avatarUrl": [
                33
            ],
            "createdAt": [
                883
            ],
            "currentChallenge": [
                33
            ],
            "defaultRole": [
                33
            ],
            "defaultRoleByRole": [
                107
            ],
            "disabled": [
                4
            ],
            "displayName": [
                33
            ],
            "email": [
                272
            ],
            "emailVerified": [
                4
            ],
            "groups": [
                498
            ],
            "groups_aggregate": [
                489
            ],
            "id": [
                938
            ],
            "invitations": [
                540
            ],
            "invitationsBySenderId": [
                540
            ],
            "invitationsBySenderId_aggregate": [
                535
            ],
            "invitations_aggregate": [
                535
            ],
            "isAnonymous": [
                4
            ],
            "lastSeen": [
                883
            ],
            "locale": [
                33
            ],
            "members": [
                572
            ],
            "members_aggregate": [
                565
            ],
            "metadata": [
                562
            ],
            "newEmail": [
                272
            ],
            "notifications": [
                614
            ],
            "notifications_aggregate": [
                607
            ],
            "otpHash": [
                33
            ],
            "otpHashExpiresAt": [
                883
            ],
            "otpMethodLastUsed": [
                33
            ],
            "partner_operators": [
                706
            ],
            "partner_operators_aggregate": [
                701
            ],
            "passwordHash": [
                33
            ],
            "phoneNumber": [
                33
            ],
            "phoneNumberVerified": [
                4
            ],
            "refreshTokens": [
                87
            ],
            "refreshTokens_aggregate": [
                82
            ],
            "roles": [
                154
            ],
            "roles_aggregate": [
                149
            ],
            "securityKeys": [
                180
            ],
            "securityKeys_aggregate": [
                173
            ],
            "ticket": [
                33
            ],
            "ticketExpiresAt": [
                883
            ],
            "totpSecret": [
                33
            ],
            "updatedAt": [
                883
            ],
            "userProviders": [
                130
            ],
            "userProviders_aggregate": [
                125
            ],
            "user_profile": [
                887
            ],
            "__typename": [
                32
            ]
        },
        "users_constraint": {},
        "users_delete_at_path_input": {
            "metadata": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "users_delete_elem_input": {
            "metadata": [
                22
            ],
            "__typename": [
                32
            ]
        },
        "users_delete_key_input": {
            "metadata": [
                32
            ],
            "__typename": [
                32
            ]
        },
        "users_insert_input": {
            "activeMfaType": [
                32
            ],
            "avatarUrl": [
                32
            ],
            "createdAt": [
                882
            ],
            "currentChallenge": [
                32
            ],
            "defaultRole": [
                32
            ],
            "defaultRoleByRole": [
                113
            ],
            "disabled": [
                3
            ],
            "displayName": [
                32
            ],
            "email": [
                271
            ],
            "emailVerified": [
                3
            ],
            "groups": [
                495
            ],
            "id": [
                937
            ],
            "invitations": [
                539
            ],
            "invitationsBySenderId": [
                539
            ],
            "isAnonymous": [
                3
            ],
            "lastSeen": [
                882
            ],
            "locale": [
                32
            ],
            "members": [
                569
            ],
            "metadata": [
                560
            ],
            "newEmail": [
                271
            ],
            "notifications": [
                613
            ],
            "otpHash": [
                32
            ],
            "otpHashExpiresAt": [
                882
            ],
            "otpMethodLastUsed": [
                32
            ],
            "partner_operators": [
                705
            ],
            "passwordHash": [
                32
            ],
            "phoneNumber": [
                32
            ],
            "phoneNumberVerified": [
                3
            ],
            "refreshTokens": [
                86
            ],
            "roles": [
                153
            ],
            "securityKeys": [
                177
            ],
            "ticket": [
                32
            ],
            "ticketExpiresAt": [
                882
            ],
            "totpSecret": [
                32
            ],
            "updatedAt": [
                882
            ],
            "userProviders": [
                129
            ],
            "user_profile": [
                893
            ],
            "__typename": [
                32
            ]
        },
        "users_max_fields": {
            "activeMfaType": [
                32
            ],
            "avatarUrl": [
                32
            ],
            "createdAt": [
                882
            ],
            "currentChallenge": [
                32
            ],
            "defaultRole": [
                32
            ],
            "displayName": [
                32
            ],
            "email": [
                271
            ],
            "id": [
                937
            ],
            "lastSeen": [
                882
            ],
            "locale": [
                32
            ],
            "newEmail": [
                271
            ],
            "otpHash": [
                32
            ],
            "otpHashExpiresAt": [
                882
            ],
            "otpMethodLastUsed": [
                32
            ],
            "passwordHash": [
                32
            ],
            "phoneNumber": [
                32
            ],
            "ticket": [
                32
            ],
            "ticketExpiresAt": [
                882
            ],
            "totpSecret": [
                32
            ],
            "updatedAt": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "users_max_order_by": {
            "activeMfaType": [
                635
            ],
            "avatarUrl": [
                635
            ],
            "createdAt": [
                635
            ],
            "currentChallenge": [
                635
            ],
            "defaultRole": [
                635
            ],
            "displayName": [
                635
            ],
            "email": [
                635
            ],
            "id": [
                635
            ],
            "lastSeen": [
                635
            ],
            "locale": [
                635
            ],
            "newEmail": [
                635
            ],
            "otpHash": [
                635
            ],
            "otpHashExpiresAt": [
                635
            ],
            "otpMethodLastUsed": [
                635
            ],
            "passwordHash": [
                635
            ],
            "phoneNumber": [
                635
            ],
            "ticket": [
                635
            ],
            "ticketExpiresAt": [
                635
            ],
            "totpSecret": [
                635
            ],
            "updatedAt": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "users_min_fields": {
            "activeMfaType": [
                32
            ],
            "avatarUrl": [
                32
            ],
            "createdAt": [
                882
            ],
            "currentChallenge": [
                32
            ],
            "defaultRole": [
                32
            ],
            "displayName": [
                32
            ],
            "email": [
                271
            ],
            "id": [
                937
            ],
            "lastSeen": [
                882
            ],
            "locale": [
                32
            ],
            "newEmail": [
                271
            ],
            "otpHash": [
                32
            ],
            "otpHashExpiresAt": [
                882
            ],
            "otpMethodLastUsed": [
                32
            ],
            "passwordHash": [
                32
            ],
            "phoneNumber": [
                32
            ],
            "ticket": [
                32
            ],
            "ticketExpiresAt": [
                882
            ],
            "totpSecret": [
                32
            ],
            "updatedAt": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "users_min_order_by": {
            "activeMfaType": [
                635
            ],
            "avatarUrl": [
                635
            ],
            "createdAt": [
                635
            ],
            "currentChallenge": [
                635
            ],
            "defaultRole": [
                635
            ],
            "displayName": [
                635
            ],
            "email": [
                635
            ],
            "id": [
                635
            ],
            "lastSeen": [
                635
            ],
            "locale": [
                635
            ],
            "newEmail": [
                635
            ],
            "otpHash": [
                635
            ],
            "otpHashExpiresAt": [
                635
            ],
            "otpMethodLastUsed": [
                635
            ],
            "passwordHash": [
                635
            ],
            "phoneNumber": [
                635
            ],
            "ticket": [
                635
            ],
            "ticketExpiresAt": [
                635
            ],
            "totpSecret": [
                635
            ],
            "updatedAt": [
                635
            ],
            "__typename": [
                32
            ]
        },
        "users_mutation_response": {
            "affected_rows": [
                22
            ],
            "returning": [
                903
            ],
            "__typename": [
                32
            ]
        },
        "users_obj_rel_insert_input": {
            "data": [
                918
            ],
            "on_conflict": [
                925
            ],
            "__typename": [
                32
            ]
        },
        "users_on_conflict": {
            "constraint": [
                914
            ],
            "update_columns": [
                935
            ],
            "where": [
                913
            ],
            "__typename": [
                32
            ]
        },
        "users_order_by": {
            "activeMfaType": [
                635
            ],
            "avatarUrl": [
                635
            ],
            "createdAt": [
                635
            ],
            "currentChallenge": [
                635
            ],
            "defaultRole": [
                635
            ],
            "defaultRoleByRole": [
                115
            ],
            "disabled": [
                635
            ],
            "displayName": [
                635
            ],
            "email": [
                635
            ],
            "emailVerified": [
                635
            ],
            "groups_aggregate": [
                494
            ],
            "id": [
                635
            ],
            "invitationsBySenderId_aggregate": [
                538
            ],
            "invitations_aggregate": [
                538
            ],
            "isAnonymous": [
                635
            ],
            "lastSeen": [
                635
            ],
            "locale": [
                635
            ],
            "members_aggregate": [
                568
            ],
            "metadata": [
                635
            ],
            "newEmail": [
                635
            ],
            "notifications_aggregate": [
                612
            ],
            "otpHash": [
                635
            ],
            "otpHashExpiresAt": [
                635
            ],
            "otpMethodLastUsed": [
                635
            ],
            "partner_operators_aggregate": [
                704
            ],
            "passwordHash": [
                635
            ],
            "phoneNumber": [
                635
            ],
            "phoneNumberVerified": [
                635
            ],
            "refreshTokens_aggregate": [
                85
            ],
            "roles_aggregate": [
                152
            ],
            "securityKeys_aggregate": [
                176
            ],
            "ticket": [
                635
            ],
            "ticketExpiresAt": [
                635
            ],
            "totpSecret": [
                635
            ],
            "updatedAt": [
                635
            ],
            "userProviders_aggregate": [
                128
            ],
            "user_profile": [
                895
            ],
            "__typename": [
                32
            ]
        },
        "users_pk_columns_input": {
            "id": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "users_prepend_input": {
            "metadata": [
                560
            ],
            "__typename": [
                32
            ]
        },
        "users_select_column": {},
        "users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns": {},
        "users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns": {},
        "users_set_input": {
            "activeMfaType": [
                32
            ],
            "avatarUrl": [
                32
            ],
            "createdAt": [
                882
            ],
            "currentChallenge": [
                32
            ],
            "defaultRole": [
                32
            ],
            "disabled": [
                3
            ],
            "displayName": [
                32
            ],
            "email": [
                271
            ],
            "emailVerified": [
                3
            ],
            "id": [
                937
            ],
            "isAnonymous": [
                3
            ],
            "lastSeen": [
                882
            ],
            "locale": [
                32
            ],
            "metadata": [
                560
            ],
            "newEmail": [
                271
            ],
            "otpHash": [
                32
            ],
            "otpHashExpiresAt": [
                882
            ],
            "otpMethodLastUsed": [
                32
            ],
            "passwordHash": [
                32
            ],
            "phoneNumber": [
                32
            ],
            "phoneNumberVerified": [
                3
            ],
            "ticket": [
                32
            ],
            "ticketExpiresAt": [
                882
            ],
            "totpSecret": [
                32
            ],
            "updatedAt": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "users_stream_cursor_input": {
            "initial_value": [
                934
            ],
            "ordering": [
                273
            ],
            "__typename": [
                32
            ]
        },
        "users_stream_cursor_value_input": {
            "activeMfaType": [
                32
            ],
            "avatarUrl": [
                32
            ],
            "createdAt": [
                882
            ],
            "currentChallenge": [
                32
            ],
            "defaultRole": [
                32
            ],
            "disabled": [
                3
            ],
            "displayName": [
                32
            ],
            "email": [
                271
            ],
            "emailVerified": [
                3
            ],
            "id": [
                937
            ],
            "isAnonymous": [
                3
            ],
            "lastSeen": [
                882
            ],
            "locale": [
                32
            ],
            "metadata": [
                560
            ],
            "newEmail": [
                271
            ],
            "otpHash": [
                32
            ],
            "otpHashExpiresAt": [
                882
            ],
            "otpMethodLastUsed": [
                32
            ],
            "passwordHash": [
                32
            ],
            "phoneNumber": [
                32
            ],
            "phoneNumberVerified": [
                3
            ],
            "ticket": [
                32
            ],
            "ticketExpiresAt": [
                882
            ],
            "totpSecret": [
                32
            ],
            "updatedAt": [
                882
            ],
            "__typename": [
                32
            ]
        },
        "users_update_column": {},
        "users_updates": {
            "_append": [
                911
            ],
            "_delete_at_path": [
                915
            ],
            "_delete_elem": [
                916
            ],
            "_delete_key": [
                917
            ],
            "_prepend": [
                928
            ],
            "_set": [
                932
            ],
            "where": [
                913
            ],
            "__typename": [
                32
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                937
            ],
            "_gt": [
                937
            ],
            "_gte": [
                937
            ],
            "_in": [
                937
            ],
            "_is_null": [
                3
            ],
            "_lt": [
                937
            ],
            "_lte": [
                937
            ],
            "_neq": [
                937
            ],
            "_nin": [
                937
            ],
            "__typename": [
                32
            ]
        },
        "Query": {
            "authProvider": [
                61,
                {
                    "id": [
                        32,
                        "String!"
                    ]
                }
            ],
            "authProviderRequest": [
                38,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "authProviderRequests": [
                38,
                {
                    "distinct_on": [
                        55,
                        "[authProviderRequests_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        52,
                        "[authProviderRequests_order_by!]"
                    ],
                    "where": [
                        42
                    ]
                }
            ],
            "authProviderRequestsAggregate": [
                39,
                {
                    "distinct_on": [
                        55,
                        "[authProviderRequests_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        52,
                        "[authProviderRequests_order_by!]"
                    ],
                    "where": [
                        42
                    ]
                }
            ],
            "authProviders": [
                61,
                {
                    "distinct_on": [
                        74,
                        "[authProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        72,
                        "[authProviders_order_by!]"
                    ],
                    "where": [
                        64
                    ]
                }
            ],
            "authProvidersAggregate": [
                62,
                {
                    "distinct_on": [
                        74,
                        "[authProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        72,
                        "[authProviders_order_by!]"
                    ],
                    "where": [
                        64
                    ]
                }
            ],
            "authRefreshToken": [
                80,
                {
                    "refreshToken": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "authRefreshTokens": [
                80,
                {
                    "distinct_on": [
                        98,
                        "[authRefreshTokens_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        96,
                        "[authRefreshTokens_order_by!]"
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "authRefreshTokensAggregate": [
                81,
                {
                    "distinct_on": [
                        98,
                        "[authRefreshTokens_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        96,
                        "[authRefreshTokens_order_by!]"
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "authRole": [
                104,
                {
                    "role": [
                        32,
                        "String!"
                    ]
                }
            ],
            "authRoles": [
                104,
                {
                    "distinct_on": [
                        117,
                        "[authRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        115,
                        "[authRoles_order_by!]"
                    ],
                    "where": [
                        107
                    ]
                }
            ],
            "authRolesAggregate": [
                105,
                {
                    "distinct_on": [
                        117,
                        "[authRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        115,
                        "[authRoles_order_by!]"
                    ],
                    "where": [
                        107
                    ]
                }
            ],
            "authUserProvider": [
                123,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "authUserProviders": [
                123,
                {
                    "distinct_on": [
                        141,
                        "[authUserProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        139,
                        "[authUserProviders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "authUserProvidersAggregate": [
                124,
                {
                    "distinct_on": [
                        141,
                        "[authUserProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        139,
                        "[authUserProviders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "authUserRole": [
                147,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "authUserRoles": [
                147,
                {
                    "distinct_on": [
                        165,
                        "[authUserRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        163,
                        "[authUserRoles_order_by!]"
                    ],
                    "where": [
                        154
                    ]
                }
            ],
            "authUserRolesAggregate": [
                148,
                {
                    "distinct_on": [
                        165,
                        "[authUserRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        163,
                        "[authUserRoles_order_by!]"
                    ],
                    "where": [
                        154
                    ]
                }
            ],
            "authUserSecurityKey": [
                171,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "authUserSecurityKeys": [
                171,
                {
                    "distinct_on": [
                        192,
                        "[authUserSecurityKeys_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        190,
                        "[authUserSecurityKeys_order_by!]"
                    ],
                    "where": [
                        180
                    ]
                }
            ],
            "authUserSecurityKeysAggregate": [
                172,
                {
                    "distinct_on": [
                        192,
                        "[authUserSecurityKeys_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        190,
                        "[authUserSecurityKeys_order_by!]"
                    ],
                    "where": [
                        180
                    ]
                }
            ],
            "auth_migrations": [
                212,
                {
                    "distinct_on": [
                        226,
                        "[auth_migrations_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        224,
                        "[auth_migrations_order_by!]"
                    ],
                    "where": [
                        216
                    ]
                }
            ],
            "auth_migrations_aggregate": [
                213,
                {
                    "distinct_on": [
                        226,
                        "[auth_migrations_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        224,
                        "[auth_migrations_order_by!]"
                    ],
                    "where": [
                        216
                    ]
                }
            ],
            "auth_migrations_by_pk": [
                212,
                {
                    "id": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "bucket": [
                241,
                {
                    "id": [
                        32,
                        "String!"
                    ]
                }
            ],
            "buckets": [
                241,
                {
                    "distinct_on": [
                        256,
                        "[buckets_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        254,
                        "[buckets_order_by!]"
                    ],
                    "where": [
                        245
                    ]
                }
            ],
            "bucketsAggregate": [
                242,
                {
                    "distinct_on": [
                        256,
                        "[buckets_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        254,
                        "[buckets_order_by!]"
                    ],
                    "where": [
                        245
                    ]
                }
            ],
            "en_currencies": [
                274,
                {
                    "distinct_on": [
                        289,
                        "[en_currencies_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        287,
                        "[en_currencies_order_by!]"
                    ],
                    "where": [
                        277
                    ]
                }
            ],
            "en_currencies_aggregate": [
                275,
                {
                    "distinct_on": [
                        289,
                        "[en_currencies_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        287,
                        "[en_currencies_order_by!]"
                    ],
                    "where": [
                        277
                    ]
                }
            ],
            "en_currencies_by_pk": [
                274,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_notifications": [
                295,
                {
                    "distinct_on": [
                        310,
                        "[en_notifications_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        308,
                        "[en_notifications_order_by!]"
                    ],
                    "where": [
                        298
                    ]
                }
            ],
            "en_notifications_aggregate": [
                296,
                {
                    "distinct_on": [
                        310,
                        "[en_notifications_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        308,
                        "[en_notifications_order_by!]"
                    ],
                    "where": [
                        298
                    ]
                }
            ],
            "en_notifications_by_pk": [
                295,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_partner_steps": [
                316,
                {
                    "distinct_on": [
                        331,
                        "[en_partner_steps_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        329,
                        "[en_partner_steps_order_by!]"
                    ],
                    "where": [
                        319
                    ]
                }
            ],
            "en_partner_steps_aggregate": [
                317,
                {
                    "distinct_on": [
                        331,
                        "[en_partner_steps_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        329,
                        "[en_partner_steps_order_by!]"
                    ],
                    "where": [
                        319
                    ]
                }
            ],
            "en_partner_steps_by_pk": [
                316,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_payment_providers": [
                337,
                {
                    "distinct_on": [
                        352,
                        "[en_payment_providers_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        350,
                        "[en_payment_providers_order_by!]"
                    ],
                    "where": [
                        340
                    ]
                }
            ],
            "en_payment_providers_aggregate": [
                338,
                {
                    "distinct_on": [
                        352,
                        "[en_payment_providers_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        350,
                        "[en_payment_providers_order_by!]"
                    ],
                    "where": [
                        340
                    ]
                }
            ],
            "en_payment_providers_by_pk": [
                337,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_permissions": [
                358,
                {
                    "distinct_on": [
                        373,
                        "[en_permissions_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        371,
                        "[en_permissions_order_by!]"
                    ],
                    "where": [
                        361
                    ]
                }
            ],
            "en_permissions_aggregate": [
                359,
                {
                    "distinct_on": [
                        373,
                        "[en_permissions_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        371,
                        "[en_permissions_order_by!]"
                    ],
                    "where": [
                        361
                    ]
                }
            ],
            "en_permissions_by_pk": [
                358,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_recurrencies": [
                379,
                {
                    "distinct_on": [
                        394,
                        "[en_recurrencies_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        392,
                        "[en_recurrencies_order_by!]"
                    ],
                    "where": [
                        382
                    ]
                }
            ],
            "en_recurrencies_aggregate": [
                380,
                {
                    "distinct_on": [
                        394,
                        "[en_recurrencies_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        392,
                        "[en_recurrencies_order_by!]"
                    ],
                    "where": [
                        382
                    ]
                }
            ],
            "en_recurrencies_by_pk": [
                379,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_statuses": [
                400,
                {
                    "distinct_on": [
                        415,
                        "[en_statuses_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        413,
                        "[en_statuses_order_by!]"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "en_statuses_aggregate": [
                401,
                {
                    "distinct_on": [
                        415,
                        "[en_statuses_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        413,
                        "[en_statuses_order_by!]"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "en_statuses_by_pk": [
                400,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_trans_types": [
                421,
                {
                    "distinct_on": [
                        436,
                        "[en_trans_types_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        434,
                        "[en_trans_types_order_by!]"
                    ],
                    "where": [
                        424
                    ]
                }
            ],
            "en_trans_types_aggregate": [
                422,
                {
                    "distinct_on": [
                        436,
                        "[en_trans_types_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        434,
                        "[en_trans_types_order_by!]"
                    ],
                    "where": [
                        424
                    ]
                }
            ],
            "en_trans_types_by_pk": [
                421,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "file": [
                442,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "files": [
                442,
                {
                    "distinct_on": [
                        465,
                        "[files_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        463,
                        "[files_order_by!]"
                    ],
                    "where": [
                        453
                    ]
                }
            ],
            "filesAggregate": [
                443,
                {
                    "distinct_on": [
                        465,
                        "[files_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        463,
                        "[files_order_by!]"
                    ],
                    "where": [
                        453
                    ]
                }
            ],
            "group": [
                487,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "group_aggregate": [
                488,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "group_by_pk": [
                487,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "invitation": [
                533,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "invitation_aggregate": [
                534,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "invitation_by_pk": [
                533,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "member": [
                563,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "member_aggregate": [
                564,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "member_by_pk": [
                563,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "notification": [
                605,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "notification_aggregate": [
                606,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "notification_by_pk": [
                605,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "partner": [
                636,
                {
                    "distinct_on": [
                        725,
                        "[partner_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        723,
                        "[partner_order_by!]"
                    ],
                    "where": [
                        643
                    ]
                }
            ],
            "partner_aggregate": [
                637,
                {
                    "distinct_on": [
                        725,
                        "[partner_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        723,
                        "[partner_order_by!]"
                    ],
                    "where": [
                        643
                    ]
                }
            ],
            "partner_by_pk": [
                636,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "partner_campaign": [
                644,
                {
                    "distinct_on": [
                        668,
                        "[partner_campaign_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        666,
                        "[partner_campaign_order_by!]"
                    ],
                    "where": [
                        655
                    ]
                }
            ],
            "partner_campaign_aggregate": [
                645,
                {
                    "distinct_on": [
                        668,
                        "[partner_campaign_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        666,
                        "[partner_campaign_order_by!]"
                    ],
                    "where": [
                        655
                    ]
                }
            ],
            "partner_campaign_by_pk": [
                644,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "partner_operator": [
                699,
                {
                    "distinct_on": [
                        717,
                        "[partner_operator_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        715,
                        "[partner_operator_order_by!]"
                    ],
                    "where": [
                        706
                    ]
                }
            ],
            "partner_operator_aggregate": [
                700,
                {
                    "distinct_on": [
                        717,
                        "[partner_operator_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        715,
                        "[partner_operator_order_by!]"
                    ],
                    "where": [
                        706
                    ]
                }
            ],
            "partner_operator_by_pk": [
                699,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "payment": [
                731,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payment_aggregate": [
                732,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payment_by_pk": [
                731,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "payment_review": [
                758,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_review_aggregate": [
                759,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_review_by_pk": [
                758,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "period": [
                820,
                {
                    "distinct_on": [
                        842,
                        "[period_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        840,
                        "[period_order_by!]"
                    ],
                    "where": [
                        829
                    ]
                }
            ],
            "period_aggregate": [
                821,
                {
                    "distinct_on": [
                        842,
                        "[period_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        840,
                        "[period_order_by!]"
                    ],
                    "where": [
                        829
                    ]
                }
            ],
            "period_by_pk": [
                820,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "state_cache": [
                862,
                {
                    "distinct_on": [
                        874,
                        "[state_cache_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        872,
                        "[state_cache_order_by!]"
                    ],
                    "where": [
                        865
                    ]
                }
            ],
            "state_cache_aggregate": [
                863,
                {
                    "distinct_on": [
                        874,
                        "[state_cache_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        872,
                        "[state_cache_order_by!]"
                    ],
                    "where": [
                        865
                    ]
                }
            ],
            "state_cache_by_pk": [
                862,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "user": [
                903,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "user_profile": [
                884,
                {
                    "distinct_on": [
                        897,
                        "[user_profile_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        895,
                        "[user_profile_order_by!]"
                    ],
                    "where": [
                        887
                    ]
                }
            ],
            "user_profile_aggregate": [
                885,
                {
                    "distinct_on": [
                        897,
                        "[user_profile_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        895,
                        "[user_profile_order_by!]"
                    ],
                    "where": [
                        887
                    ]
                }
            ],
            "user_profile_by_pk": [
                884,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "users": [
                903,
                {
                    "distinct_on": [
                        929,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        926,
                        "[users_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "usersAggregate": [
                904,
                {
                    "distinct_on": [
                        929,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        926,
                        "[users_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "__typename": [
                32
            ]
        },
        "Mutation": {
            "alter_emails": [
                1,
                {
                    "arg": [
                        0,
                        "AlterEmailsInput!"
                    ]
                }
            ],
            "check_phonenumber": [
                7,
                {
                    "arg": [
                        6,
                        "CheckClerkPhoneNumberInput!"
                    ]
                }
            ],
            "clerk_test": [
                31,
                {
                    "arg1": [
                        30,
                        "SampleInput!"
                    ]
                }
            ],
            "complete_period": [
                27,
                {
                    "props": [
                        26
                    ]
                }
            ],
            "deleteAuthProvider": [
                61,
                {
                    "id": [
                        32,
                        "String!"
                    ]
                }
            ],
            "deleteAuthProviderRequest": [
                38,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "deleteAuthProviderRequests": [
                50,
                {
                    "where": [
                        42,
                        "authProviderRequests_bool_exp!"
                    ]
                }
            ],
            "deleteAuthProviders": [
                69,
                {
                    "where": [
                        64,
                        "authProviders_bool_exp!"
                    ]
                }
            ],
            "deleteAuthRefreshToken": [
                80,
                {
                    "refreshToken": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "deleteAuthRefreshTokens": [
                94,
                {
                    "where": [
                        87,
                        "authRefreshTokens_bool_exp!"
                    ]
                }
            ],
            "deleteAuthRole": [
                104,
                {
                    "role": [
                        32,
                        "String!"
                    ]
                }
            ],
            "deleteAuthRoles": [
                112,
                {
                    "where": [
                        107,
                        "authRoles_bool_exp!"
                    ]
                }
            ],
            "deleteAuthUserProvider": [
                123,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "deleteAuthUserProviders": [
                137,
                {
                    "where": [
                        130,
                        "authUserProviders_bool_exp!"
                    ]
                }
            ],
            "deleteAuthUserRole": [
                147,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "deleteAuthUserRoles": [
                161,
                {
                    "where": [
                        154,
                        "authUserRoles_bool_exp!"
                    ]
                }
            ],
            "deleteAuthUserSecurityKey": [
                171,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "deleteAuthUserSecurityKeys": [
                188,
                {
                    "where": [
                        180,
                        "authUserSecurityKeys_bool_exp!"
                    ]
                }
            ],
            "deleteBucket": [
                241,
                {
                    "id": [
                        32,
                        "String!"
                    ]
                }
            ],
            "deleteBuckets": [
                251,
                {
                    "where": [
                        245,
                        "buckets_bool_exp!"
                    ]
                }
            ],
            "deleteFile": [
                442,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "deleteFiles": [
                461,
                {
                    "where": [
                        453,
                        "files_bool_exp!"
                    ]
                }
            ],
            "deleteUser": [
                903,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "deleteUsers": [
                923,
                {
                    "where": [
                        913,
                        "users_bool_exp!"
                    ]
                }
            ],
            "delete_auth_migrations": [
                222,
                {
                    "where": [
                        216,
                        "auth_migrations_bool_exp!"
                    ]
                }
            ],
            "delete_auth_migrations_by_pk": [
                212,
                {
                    "id": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "delete_en_currencies": [
                284,
                {
                    "where": [
                        277,
                        "en_currencies_bool_exp!"
                    ]
                }
            ],
            "delete_en_currencies_by_pk": [
                274,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "delete_en_notifications": [
                305,
                {
                    "where": [
                        298,
                        "en_notifications_bool_exp!"
                    ]
                }
            ],
            "delete_en_notifications_by_pk": [
                295,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "delete_en_partner_steps": [
                326,
                {
                    "where": [
                        319,
                        "en_partner_steps_bool_exp!"
                    ]
                }
            ],
            "delete_en_partner_steps_by_pk": [
                316,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "delete_en_payment_providers": [
                347,
                {
                    "where": [
                        340,
                        "en_payment_providers_bool_exp!"
                    ]
                }
            ],
            "delete_en_payment_providers_by_pk": [
                337,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "delete_en_permissions": [
                368,
                {
                    "where": [
                        361,
                        "en_permissions_bool_exp!"
                    ]
                }
            ],
            "delete_en_permissions_by_pk": [
                358,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "delete_en_recurrencies": [
                389,
                {
                    "where": [
                        382,
                        "en_recurrencies_bool_exp!"
                    ]
                }
            ],
            "delete_en_recurrencies_by_pk": [
                379,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "delete_en_statuses": [
                410,
                {
                    "where": [
                        403,
                        "en_statuses_bool_exp!"
                    ]
                }
            ],
            "delete_en_statuses_by_pk": [
                400,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "delete_en_trans_types": [
                431,
                {
                    "where": [
                        424,
                        "en_trans_types_bool_exp!"
                    ]
                }
            ],
            "delete_en_trans_types_by_pk": [
                421,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "delete_group": [
                506,
                {
                    "where": [
                        498,
                        "group_bool_exp!"
                    ]
                }
            ],
            "delete_group_by_pk": [
                487,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_invitation": [
                547,
                {
                    "where": [
                        540,
                        "invitation_bool_exp!"
                    ]
                }
            ],
            "delete_invitation_by_pk": [
                533,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_member": [
                580,
                {
                    "where": [
                        572,
                        "member_bool_exp!"
                    ]
                }
            ],
            "delete_member_by_pk": [
                563,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_notification": [
                621,
                {
                    "where": [
                        614,
                        "notification_bool_exp!"
                    ]
                }
            ],
            "delete_notification_by_pk": [
                605,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_partner": [
                696,
                {
                    "where": [
                        643,
                        "partner_bool_exp!"
                    ]
                }
            ],
            "delete_partner_by_pk": [
                636,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_partner_campaign": [
                663,
                {
                    "where": [
                        655,
                        "partner_campaign_bool_exp!"
                    ]
                }
            ],
            "delete_partner_campaign_by_pk": [
                644,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_partner_operator": [
                713,
                {
                    "where": [
                        706,
                        "partner_operator_bool_exp!"
                    ]
                }
            ],
            "delete_partner_operator_by_pk": [
                699,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_payment": [
                752,
                {
                    "where": [
                        741,
                        "payment_bool_exp!"
                    ]
                }
            ],
            "delete_payment_by_pk": [
                731,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_payment_review": [
                775,
                {
                    "where": [
                        767,
                        "payment_review_bool_exp!"
                    ]
                }
            ],
            "delete_payment_review_by_pk": [
                758,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_period": [
                837,
                {
                    "where": [
                        829,
                        "period_bool_exp!"
                    ]
                }
            ],
            "delete_period_by_pk": [
                820,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_state_cache": [
                870,
                {
                    "where": [
                        865,
                        "state_cache_bool_exp!"
                    ]
                }
            ],
            "delete_state_cache_by_pk": [
                862,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "delete_user_profile": [
                892,
                {
                    "where": [
                        887,
                        "user_profile_bool_exp!"
                    ]
                }
            ],
            "delete_user_profile_by_pk": [
                884,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "deposit_tests": [
                18,
                {
                    "params": [
                        17,
                        "DepositTestInput!"
                    ]
                }
            ],
            "fetch_clerk_profile": [
                20,
                {
                    "arg": [
                        19,
                        "FetchClerkProfileInput!"
                    ]
                }
            ],
            "insertAuthProvider": [
                61,
                {
                    "object": [
                        66,
                        "authProviders_insert_input!"
                    ],
                    "on_conflict": [
                        71
                    ]
                }
            ],
            "insertAuthProviderRequest": [
                38,
                {
                    "object": [
                        47,
                        "authProviderRequests_insert_input!"
                    ],
                    "on_conflict": [
                        51
                    ]
                }
            ],
            "insertAuthProviderRequests": [
                50,
                {
                    "objects": [
                        47,
                        "[authProviderRequests_insert_input!]!"
                    ],
                    "on_conflict": [
                        51
                    ]
                }
            ],
            "insertAuthProviders": [
                69,
                {
                    "objects": [
                        66,
                        "[authProviders_insert_input!]!"
                    ],
                    "on_conflict": [
                        71
                    ]
                }
            ],
            "insertAuthRefreshToken": [
                80,
                {
                    "object": [
                        89,
                        "authRefreshTokens_insert_input!"
                    ],
                    "on_conflict": [
                        95
                    ]
                }
            ],
            "insertAuthRefreshTokens": [
                94,
                {
                    "objects": [
                        89,
                        "[authRefreshTokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        95
                    ]
                }
            ],
            "insertAuthRole": [
                104,
                {
                    "object": [
                        109,
                        "authRoles_insert_input!"
                    ],
                    "on_conflict": [
                        114
                    ]
                }
            ],
            "insertAuthRoles": [
                112,
                {
                    "objects": [
                        109,
                        "[authRoles_insert_input!]!"
                    ],
                    "on_conflict": [
                        114
                    ]
                }
            ],
            "insertAuthUserProvider": [
                123,
                {
                    "object": [
                        132,
                        "authUserProviders_insert_input!"
                    ],
                    "on_conflict": [
                        138
                    ]
                }
            ],
            "insertAuthUserProviders": [
                137,
                {
                    "objects": [
                        132,
                        "[authUserProviders_insert_input!]!"
                    ],
                    "on_conflict": [
                        138
                    ]
                }
            ],
            "insertAuthUserRole": [
                147,
                {
                    "object": [
                        156,
                        "authUserRoles_insert_input!"
                    ],
                    "on_conflict": [
                        162
                    ]
                }
            ],
            "insertAuthUserRoles": [
                161,
                {
                    "objects": [
                        156,
                        "[authUserRoles_insert_input!]!"
                    ],
                    "on_conflict": [
                        162
                    ]
                }
            ],
            "insertAuthUserSecurityKey": [
                171,
                {
                    "object": [
                        183,
                        "authUserSecurityKeys_insert_input!"
                    ],
                    "on_conflict": [
                        189
                    ]
                }
            ],
            "insertAuthUserSecurityKeys": [
                188,
                {
                    "objects": [
                        183,
                        "[authUserSecurityKeys_insert_input!]!"
                    ],
                    "on_conflict": [
                        189
                    ]
                }
            ],
            "insertBucket": [
                241,
                {
                    "object": [
                        248,
                        "buckets_insert_input!"
                    ],
                    "on_conflict": [
                        253
                    ]
                }
            ],
            "insertBuckets": [
                251,
                {
                    "objects": [
                        248,
                        "[buckets_insert_input!]!"
                    ],
                    "on_conflict": [
                        253
                    ]
                }
            ],
            "insertFile": [
                442,
                {
                    "object": [
                        456,
                        "files_insert_input!"
                    ],
                    "on_conflict": [
                        462
                    ]
                }
            ],
            "insertFiles": [
                461,
                {
                    "objects": [
                        456,
                        "[files_insert_input!]!"
                    ],
                    "on_conflict": [
                        462
                    ]
                }
            ],
            "insertUser": [
                903,
                {
                    "object": [
                        918,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        925
                    ]
                }
            ],
            "insertUsers": [
                923,
                {
                    "objects": [
                        918,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        925
                    ]
                }
            ],
            "insert_auth_migrations": [
                222,
                {
                    "objects": [
                        219,
                        "[auth_migrations_insert_input!]!"
                    ],
                    "on_conflict": [
                        223
                    ]
                }
            ],
            "insert_auth_migrations_one": [
                212,
                {
                    "object": [
                        219,
                        "auth_migrations_insert_input!"
                    ],
                    "on_conflict": [
                        223
                    ]
                }
            ],
            "insert_en_currencies": [
                284,
                {
                    "objects": [
                        281,
                        "[en_currencies_insert_input!]!"
                    ],
                    "on_conflict": [
                        286
                    ]
                }
            ],
            "insert_en_currencies_one": [
                274,
                {
                    "object": [
                        281,
                        "en_currencies_insert_input!"
                    ],
                    "on_conflict": [
                        286
                    ]
                }
            ],
            "insert_en_notifications": [
                305,
                {
                    "objects": [
                        302,
                        "[en_notifications_insert_input!]!"
                    ],
                    "on_conflict": [
                        307
                    ]
                }
            ],
            "insert_en_notifications_one": [
                295,
                {
                    "object": [
                        302,
                        "en_notifications_insert_input!"
                    ],
                    "on_conflict": [
                        307
                    ]
                }
            ],
            "insert_en_partner_steps": [
                326,
                {
                    "objects": [
                        323,
                        "[en_partner_steps_insert_input!]!"
                    ],
                    "on_conflict": [
                        328
                    ]
                }
            ],
            "insert_en_partner_steps_one": [
                316,
                {
                    "object": [
                        323,
                        "en_partner_steps_insert_input!"
                    ],
                    "on_conflict": [
                        328
                    ]
                }
            ],
            "insert_en_payment_providers": [
                347,
                {
                    "objects": [
                        344,
                        "[en_payment_providers_insert_input!]!"
                    ],
                    "on_conflict": [
                        349
                    ]
                }
            ],
            "insert_en_payment_providers_one": [
                337,
                {
                    "object": [
                        344,
                        "en_payment_providers_insert_input!"
                    ],
                    "on_conflict": [
                        349
                    ]
                }
            ],
            "insert_en_permissions": [
                368,
                {
                    "objects": [
                        365,
                        "[en_permissions_insert_input!]!"
                    ],
                    "on_conflict": [
                        370
                    ]
                }
            ],
            "insert_en_permissions_one": [
                358,
                {
                    "object": [
                        365,
                        "en_permissions_insert_input!"
                    ],
                    "on_conflict": [
                        370
                    ]
                }
            ],
            "insert_en_recurrencies": [
                389,
                {
                    "objects": [
                        386,
                        "[en_recurrencies_insert_input!]!"
                    ],
                    "on_conflict": [
                        391
                    ]
                }
            ],
            "insert_en_recurrencies_one": [
                379,
                {
                    "object": [
                        386,
                        "en_recurrencies_insert_input!"
                    ],
                    "on_conflict": [
                        391
                    ]
                }
            ],
            "insert_en_statuses": [
                410,
                {
                    "objects": [
                        407,
                        "[en_statuses_insert_input!]!"
                    ],
                    "on_conflict": [
                        412
                    ]
                }
            ],
            "insert_en_statuses_one": [
                400,
                {
                    "object": [
                        407,
                        "en_statuses_insert_input!"
                    ],
                    "on_conflict": [
                        412
                    ]
                }
            ],
            "insert_en_trans_types": [
                431,
                {
                    "objects": [
                        428,
                        "[en_trans_types_insert_input!]!"
                    ],
                    "on_conflict": [
                        433
                    ]
                }
            ],
            "insert_en_trans_types_one": [
                421,
                {
                    "object": [
                        428,
                        "en_trans_types_insert_input!"
                    ],
                    "on_conflict": [
                        433
                    ]
                }
            ],
            "insert_group": [
                506,
                {
                    "objects": [
                        501,
                        "[group_insert_input!]!"
                    ],
                    "on_conflict": [
                        508
                    ]
                }
            ],
            "insert_group_one": [
                487,
                {
                    "object": [
                        501,
                        "group_insert_input!"
                    ],
                    "on_conflict": [
                        508
                    ]
                }
            ],
            "insert_invitation": [
                547,
                {
                    "objects": [
                        542,
                        "[invitation_insert_input!]!"
                    ],
                    "on_conflict": [
                        549
                    ]
                }
            ],
            "insert_invitation_one": [
                533,
                {
                    "object": [
                        542,
                        "invitation_insert_input!"
                    ],
                    "on_conflict": [
                        549
                    ]
                }
            ],
            "insert_member": [
                580,
                {
                    "objects": [
                        575,
                        "[member_insert_input!]!"
                    ],
                    "on_conflict": [
                        582
                    ]
                }
            ],
            "insert_member_one": [
                563,
                {
                    "object": [
                        575,
                        "member_insert_input!"
                    ],
                    "on_conflict": [
                        582
                    ]
                }
            ],
            "insert_notification": [
                621,
                {
                    "objects": [
                        616,
                        "[notification_insert_input!]!"
                    ],
                    "on_conflict": [
                        622
                    ]
                }
            ],
            "insert_notification_one": [
                605,
                {
                    "object": [
                        616,
                        "notification_insert_input!"
                    ],
                    "on_conflict": [
                        622
                    ]
                }
            ],
            "insert_partner": [
                696,
                {
                    "objects": [
                        691,
                        "[partner_insert_input!]!"
                    ],
                    "on_conflict": [
                        698
                    ]
                }
            ],
            "insert_partner_campaign": [
                663,
                {
                    "objects": [
                        658,
                        "[partner_campaign_insert_input!]!"
                    ],
                    "on_conflict": [
                        665
                    ]
                }
            ],
            "insert_partner_campaign_one": [
                644,
                {
                    "object": [
                        658,
                        "partner_campaign_insert_input!"
                    ],
                    "on_conflict": [
                        665
                    ]
                }
            ],
            "insert_partner_one": [
                636,
                {
                    "object": [
                        691,
                        "partner_insert_input!"
                    ],
                    "on_conflict": [
                        698
                    ]
                }
            ],
            "insert_partner_operator": [
                713,
                {
                    "objects": [
                        708,
                        "[partner_operator_insert_input!]!"
                    ],
                    "on_conflict": [
                        714
                    ]
                }
            ],
            "insert_partner_operator_one": [
                699,
                {
                    "object": [
                        708,
                        "partner_operator_insert_input!"
                    ],
                    "on_conflict": [
                        714
                    ]
                }
            ],
            "insert_payment": [
                752,
                {
                    "objects": [
                        747,
                        "[payment_insert_input!]!"
                    ],
                    "on_conflict": [
                        754
                    ]
                }
            ],
            "insert_payment_one": [
                731,
                {
                    "object": [
                        747,
                        "payment_insert_input!"
                    ],
                    "on_conflict": [
                        754
                    ]
                }
            ],
            "insert_payment_review": [
                775,
                {
                    "objects": [
                        770,
                        "[payment_review_insert_input!]!"
                    ],
                    "on_conflict": [
                        777
                    ]
                }
            ],
            "insert_payment_review_one": [
                758,
                {
                    "object": [
                        770,
                        "payment_review_insert_input!"
                    ],
                    "on_conflict": [
                        777
                    ]
                }
            ],
            "insert_period": [
                837,
                {
                    "objects": [
                        832,
                        "[period_insert_input!]!"
                    ],
                    "on_conflict": [
                        839
                    ]
                }
            ],
            "insert_period_one": [
                820,
                {
                    "object": [
                        832,
                        "period_insert_input!"
                    ],
                    "on_conflict": [
                        839
                    ]
                }
            ],
            "insert_state_cache": [
                870,
                {
                    "objects": [
                        867,
                        "[state_cache_insert_input!]!"
                    ],
                    "on_conflict": [
                        871
                    ]
                }
            ],
            "insert_state_cache_one": [
                862,
                {
                    "object": [
                        867,
                        "state_cache_insert_input!"
                    ],
                    "on_conflict": [
                        871
                    ]
                }
            ],
            "insert_user_profile": [
                892,
                {
                    "objects": [
                        889,
                        "[user_profile_insert_input!]!"
                    ],
                    "on_conflict": [
                        894
                    ]
                }
            ],
            "insert_user_profile_one": [
                884,
                {
                    "object": [
                        889,
                        "user_profile_insert_input!"
                    ],
                    "on_conflict": [
                        894
                    ]
                }
            ],
            "invite_contacts": [
                9,
                {
                    "arg": [
                        11,
                        "ContactsInvitationInput!"
                    ]
                }
            ],
            "invite_member": [
                25,
                {
                    "arg": [
                        24,
                        "InviteInput!"
                    ]
                }
            ],
            "make_deposit": [
                13,
                {
                    "params": [
                        12,
                        "DepositInput!"
                    ]
                }
            ],
            "request_balances": [
                2,
                {
                    "input": [
                        5,
                        "[CURRENCY]"
                    ]
                }
            ],
            "retry_withdraw": [
                29,
                {
                    "arg": [
                        28,
                        "RetryPaymentWithdrawInput!"
                    ]
                }
            ],
            "send_message": [
                35,
                {
                    "arg": [
                        34,
                        "TestMessageInput!"
                    ]
                }
            ],
            "updateAuthProvider": [
                61,
                {
                    "_set": [
                        75
                    ],
                    "pk_columns": [
                        73,
                        "authProviders_pk_columns_input!"
                    ]
                }
            ],
            "updateAuthProviderRequest": [
                38,
                {
                    "_append": [
                        41
                    ],
                    "_delete_at_path": [
                        44
                    ],
                    "_delete_elem": [
                        45
                    ],
                    "_delete_key": [
                        46
                    ],
                    "_prepend": [
                        54
                    ],
                    "_set": [
                        56
                    ],
                    "pk_columns": [
                        53,
                        "authProviderRequests_pk_columns_input!"
                    ]
                }
            ],
            "updateAuthProviderRequests": [
                50,
                {
                    "_append": [
                        41
                    ],
                    "_delete_at_path": [
                        44
                    ],
                    "_delete_elem": [
                        45
                    ],
                    "_delete_key": [
                        46
                    ],
                    "_prepend": [
                        54
                    ],
                    "_set": [
                        56
                    ],
                    "where": [
                        42,
                        "authProviderRequests_bool_exp!"
                    ]
                }
            ],
            "updateAuthProviders": [
                69,
                {
                    "_set": [
                        75
                    ],
                    "where": [
                        64,
                        "authProviders_bool_exp!"
                    ]
                }
            ],
            "updateAuthRefreshToken": [
                80,
                {
                    "_set": [
                        99
                    ],
                    "pk_columns": [
                        97,
                        "authRefreshTokens_pk_columns_input!"
                    ]
                }
            ],
            "updateAuthRefreshTokens": [
                94,
                {
                    "_set": [
                        99
                    ],
                    "where": [
                        87,
                        "authRefreshTokens_bool_exp!"
                    ]
                }
            ],
            "updateAuthRole": [
                104,
                {
                    "_set": [
                        118
                    ],
                    "pk_columns": [
                        116,
                        "authRoles_pk_columns_input!"
                    ]
                }
            ],
            "updateAuthRoles": [
                112,
                {
                    "_set": [
                        118
                    ],
                    "where": [
                        107,
                        "authRoles_bool_exp!"
                    ]
                }
            ],
            "updateAuthUserProvider": [
                123,
                {
                    "_set": [
                        142
                    ],
                    "pk_columns": [
                        140,
                        "authUserProviders_pk_columns_input!"
                    ]
                }
            ],
            "updateAuthUserProviders": [
                137,
                {
                    "_set": [
                        142
                    ],
                    "where": [
                        130,
                        "authUserProviders_bool_exp!"
                    ]
                }
            ],
            "updateAuthUserRole": [
                147,
                {
                    "_set": [
                        166
                    ],
                    "pk_columns": [
                        164,
                        "authUserRoles_pk_columns_input!"
                    ]
                }
            ],
            "updateAuthUserRoles": [
                161,
                {
                    "_set": [
                        166
                    ],
                    "where": [
                        154,
                        "authUserRoles_bool_exp!"
                    ]
                }
            ],
            "updateAuthUserSecurityKey": [
                171,
                {
                    "_inc": [
                        182
                    ],
                    "_set": [
                        193
                    ],
                    "pk_columns": [
                        191,
                        "authUserSecurityKeys_pk_columns_input!"
                    ]
                }
            ],
            "updateAuthUserSecurityKeys": [
                188,
                {
                    "_inc": [
                        182
                    ],
                    "_set": [
                        193
                    ],
                    "where": [
                        180,
                        "authUserSecurityKeys_bool_exp!"
                    ]
                }
            ],
            "updateBucket": [
                241,
                {
                    "_inc": [
                        247
                    ],
                    "_set": [
                        257
                    ],
                    "pk_columns": [
                        255,
                        "buckets_pk_columns_input!"
                    ]
                }
            ],
            "updateBuckets": [
                251,
                {
                    "_inc": [
                        247
                    ],
                    "_set": [
                        257
                    ],
                    "where": [
                        245,
                        "buckets_bool_exp!"
                    ]
                }
            ],
            "updateFile": [
                442,
                {
                    "_inc": [
                        455
                    ],
                    "_set": [
                        468
                    ],
                    "pk_columns": [
                        464,
                        "files_pk_columns_input!"
                    ]
                }
            ],
            "updateFiles": [
                461,
                {
                    "_inc": [
                        455
                    ],
                    "_set": [
                        468
                    ],
                    "where": [
                        453,
                        "files_bool_exp!"
                    ]
                }
            ],
            "updateUser": [
                903,
                {
                    "_append": [
                        911
                    ],
                    "_delete_at_path": [
                        915
                    ],
                    "_delete_elem": [
                        916
                    ],
                    "_delete_key": [
                        917
                    ],
                    "_prepend": [
                        928
                    ],
                    "_set": [
                        932
                    ],
                    "pk_columns": [
                        927,
                        "users_pk_columns_input!"
                    ]
                }
            ],
            "updateUsers": [
                923,
                {
                    "_append": [
                        911
                    ],
                    "_delete_at_path": [
                        915
                    ],
                    "_delete_elem": [
                        916
                    ],
                    "_delete_key": [
                        917
                    ],
                    "_prepend": [
                        928
                    ],
                    "_set": [
                        932
                    ],
                    "where": [
                        913,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_authProviderRequests_many": [
                50,
                {
                    "updates": [
                        60,
                        "[authProviderRequests_updates!]!"
                    ]
                }
            ],
            "update_authProviders_many": [
                69,
                {
                    "updates": [
                        79,
                        "[authProviders_updates!]!"
                    ]
                }
            ],
            "update_authRefreshTokens_many": [
                94,
                {
                    "updates": [
                        103,
                        "[authRefreshTokens_updates!]!"
                    ]
                }
            ],
            "update_authRoles_many": [
                112,
                {
                    "updates": [
                        122,
                        "[authRoles_updates!]!"
                    ]
                }
            ],
            "update_authUserProviders_many": [
                137,
                {
                    "updates": [
                        146,
                        "[authUserProviders_updates!]!"
                    ]
                }
            ],
            "update_authUserRoles_many": [
                161,
                {
                    "updates": [
                        170,
                        "[authUserRoles_updates!]!"
                    ]
                }
            ],
            "update_authUserSecurityKeys_many": [
                188,
                {
                    "updates": [
                        205,
                        "[authUserSecurityKeys_updates!]!"
                    ]
                }
            ],
            "update_auth_migrations": [
                222,
                {
                    "_inc": [
                        218
                    ],
                    "_set": [
                        227
                    ],
                    "where": [
                        216,
                        "auth_migrations_bool_exp!"
                    ]
                }
            ],
            "update_auth_migrations_by_pk": [
                212,
                {
                    "_inc": [
                        218
                    ],
                    "_set": [
                        227
                    ],
                    "pk_columns": [
                        225,
                        "auth_migrations_pk_columns_input!"
                    ]
                }
            ],
            "update_auth_migrations_many": [
                222,
                {
                    "updates": [
                        235,
                        "[auth_migrations_updates!]!"
                    ]
                }
            ],
            "update_buckets_many": [
                251,
                {
                    "updates": [
                        265,
                        "[buckets_updates!]!"
                    ]
                }
            ],
            "update_clerk_profile": [
                37,
                {
                    "arg": [
                        36,
                        "UpdateClerkInput!"
                    ]
                }
            ],
            "update_en_currencies": [
                284,
                {
                    "_set": [
                        290
                    ],
                    "where": [
                        277,
                        "en_currencies_bool_exp!"
                    ]
                }
            ],
            "update_en_currencies_by_pk": [
                274,
                {
                    "_set": [
                        290
                    ],
                    "pk_columns": [
                        288,
                        "en_currencies_pk_columns_input!"
                    ]
                }
            ],
            "update_en_currencies_many": [
                284,
                {
                    "updates": [
                        294,
                        "[en_currencies_updates!]!"
                    ]
                }
            ],
            "update_en_notifications": [
                305,
                {
                    "_set": [
                        311
                    ],
                    "where": [
                        298,
                        "en_notifications_bool_exp!"
                    ]
                }
            ],
            "update_en_notifications_by_pk": [
                295,
                {
                    "_set": [
                        311
                    ],
                    "pk_columns": [
                        309,
                        "en_notifications_pk_columns_input!"
                    ]
                }
            ],
            "update_en_notifications_many": [
                305,
                {
                    "updates": [
                        315,
                        "[en_notifications_updates!]!"
                    ]
                }
            ],
            "update_en_partner_steps": [
                326,
                {
                    "_set": [
                        332
                    ],
                    "where": [
                        319,
                        "en_partner_steps_bool_exp!"
                    ]
                }
            ],
            "update_en_partner_steps_by_pk": [
                316,
                {
                    "_set": [
                        332
                    ],
                    "pk_columns": [
                        330,
                        "en_partner_steps_pk_columns_input!"
                    ]
                }
            ],
            "update_en_partner_steps_many": [
                326,
                {
                    "updates": [
                        336,
                        "[en_partner_steps_updates!]!"
                    ]
                }
            ],
            "update_en_payment_providers": [
                347,
                {
                    "_set": [
                        353
                    ],
                    "where": [
                        340,
                        "en_payment_providers_bool_exp!"
                    ]
                }
            ],
            "update_en_payment_providers_by_pk": [
                337,
                {
                    "_set": [
                        353
                    ],
                    "pk_columns": [
                        351,
                        "en_payment_providers_pk_columns_input!"
                    ]
                }
            ],
            "update_en_payment_providers_many": [
                347,
                {
                    "updates": [
                        357,
                        "[en_payment_providers_updates!]!"
                    ]
                }
            ],
            "update_en_permissions": [
                368,
                {
                    "_set": [
                        374
                    ],
                    "where": [
                        361,
                        "en_permissions_bool_exp!"
                    ]
                }
            ],
            "update_en_permissions_by_pk": [
                358,
                {
                    "_set": [
                        374
                    ],
                    "pk_columns": [
                        372,
                        "en_permissions_pk_columns_input!"
                    ]
                }
            ],
            "update_en_permissions_many": [
                368,
                {
                    "updates": [
                        378,
                        "[en_permissions_updates!]!"
                    ]
                }
            ],
            "update_en_recurrencies": [
                389,
                {
                    "_set": [
                        395
                    ],
                    "where": [
                        382,
                        "en_recurrencies_bool_exp!"
                    ]
                }
            ],
            "update_en_recurrencies_by_pk": [
                379,
                {
                    "_set": [
                        395
                    ],
                    "pk_columns": [
                        393,
                        "en_recurrencies_pk_columns_input!"
                    ]
                }
            ],
            "update_en_recurrencies_many": [
                389,
                {
                    "updates": [
                        399,
                        "[en_recurrencies_updates!]!"
                    ]
                }
            ],
            "update_en_statuses": [
                410,
                {
                    "_set": [
                        416
                    ],
                    "where": [
                        403,
                        "en_statuses_bool_exp!"
                    ]
                }
            ],
            "update_en_statuses_by_pk": [
                400,
                {
                    "_set": [
                        416
                    ],
                    "pk_columns": [
                        414,
                        "en_statuses_pk_columns_input!"
                    ]
                }
            ],
            "update_en_statuses_many": [
                410,
                {
                    "updates": [
                        420,
                        "[en_statuses_updates!]!"
                    ]
                }
            ],
            "update_en_trans_types": [
                431,
                {
                    "_set": [
                        437
                    ],
                    "where": [
                        424,
                        "en_trans_types_bool_exp!"
                    ]
                }
            ],
            "update_en_trans_types_by_pk": [
                421,
                {
                    "_set": [
                        437
                    ],
                    "pk_columns": [
                        435,
                        "en_trans_types_pk_columns_input!"
                    ]
                }
            ],
            "update_en_trans_types_many": [
                431,
                {
                    "updates": [
                        441,
                        "[en_trans_types_updates!]!"
                    ]
                }
            ],
            "update_files_many": [
                461,
                {
                    "updates": [
                        480,
                        "[files_updates!]!"
                    ]
                }
            ],
            "update_group": [
                506,
                {
                    "_inc": [
                        500
                    ],
                    "_set": [
                        514
                    ],
                    "where": [
                        498,
                        "group_bool_exp!"
                    ]
                }
            ],
            "update_group_by_pk": [
                487,
                {
                    "_inc": [
                        500
                    ],
                    "_set": [
                        514
                    ],
                    "pk_columns": [
                        510,
                        "group_pk_columns_input!"
                    ]
                }
            ],
            "update_group_many": [
                506,
                {
                    "updates": [
                        526,
                        "[group_updates!]!"
                    ]
                }
            ],
            "update_invitation": [
                547,
                {
                    "_set": [
                        553
                    ],
                    "where": [
                        540,
                        "invitation_bool_exp!"
                    ]
                }
            ],
            "update_invitation_by_pk": [
                533,
                {
                    "_set": [
                        553
                    ],
                    "pk_columns": [
                        551,
                        "invitation_pk_columns_input!"
                    ]
                }
            ],
            "update_invitation_many": [
                547,
                {
                    "updates": [
                        557,
                        "[invitation_updates!]!"
                    ]
                }
            ],
            "update_member": [
                580,
                {
                    "_inc": [
                        574
                    ],
                    "_set": [
                        586
                    ],
                    "where": [
                        572,
                        "member_bool_exp!"
                    ]
                }
            ],
            "update_member_by_pk": [
                563,
                {
                    "_inc": [
                        574
                    ],
                    "_set": [
                        586
                    ],
                    "pk_columns": [
                        584,
                        "member_pk_columns_input!"
                    ]
                }
            ],
            "update_member_many": [
                580,
                {
                    "updates": [
                        598,
                        "[member_updates!]!"
                    ]
                }
            ],
            "update_notification": [
                621,
                {
                    "_set": [
                        628
                    ],
                    "where": [
                        614,
                        "notification_bool_exp!"
                    ]
                }
            ],
            "update_notification_by_pk": [
                605,
                {
                    "_set": [
                        628
                    ],
                    "pk_columns": [
                        624,
                        "notification_pk_columns_input!"
                    ]
                }
            ],
            "update_notification_many": [
                621,
                {
                    "updates": [
                        632,
                        "[notification_updates!]!"
                    ]
                }
            ],
            "update_partner": [
                696,
                {
                    "_set": [
                        726
                    ],
                    "where": [
                        643,
                        "partner_bool_exp!"
                    ]
                }
            ],
            "update_partner_by_pk": [
                636,
                {
                    "_set": [
                        726
                    ],
                    "pk_columns": [
                        724,
                        "partner_pk_columns_input!"
                    ]
                }
            ],
            "update_partner_campaign": [
                663,
                {
                    "_inc": [
                        657
                    ],
                    "_set": [
                        671
                    ],
                    "where": [
                        655,
                        "partner_campaign_bool_exp!"
                    ]
                }
            ],
            "update_partner_campaign_by_pk": [
                644,
                {
                    "_inc": [
                        657
                    ],
                    "_set": [
                        671
                    ],
                    "pk_columns": [
                        667,
                        "partner_campaign_pk_columns_input!"
                    ]
                }
            ],
            "update_partner_campaign_many": [
                663,
                {
                    "updates": [
                        683,
                        "[partner_campaign_updates!]!"
                    ]
                }
            ],
            "update_partner_many": [
                696,
                {
                    "updates": [
                        730,
                        "[partner_updates!]!"
                    ]
                }
            ],
            "update_partner_operator": [
                713,
                {
                    "_set": [
                        718
                    ],
                    "where": [
                        706,
                        "partner_operator_bool_exp!"
                    ]
                }
            ],
            "update_partner_operator_by_pk": [
                699,
                {
                    "_set": [
                        718
                    ],
                    "pk_columns": [
                        716,
                        "partner_operator_pk_columns_input!"
                    ]
                }
            ],
            "update_partner_operator_many": [
                713,
                {
                    "updates": [
                        722,
                        "[partner_operator_updates!]!"
                    ]
                }
            ],
            "update_payment": [
                752,
                {
                    "_append": [
                        737
                    ],
                    "_delete_at_path": [
                        743
                    ],
                    "_delete_elem": [
                        744
                    ],
                    "_delete_key": [
                        745
                    ],
                    "_inc": [
                        746
                    ],
                    "_prepend": [
                        757
                    ],
                    "_set": [
                        801
                    ],
                    "where": [
                        741,
                        "payment_bool_exp!"
                    ]
                }
            ],
            "update_payment_by_pk": [
                731,
                {
                    "_append": [
                        737
                    ],
                    "_delete_at_path": [
                        743
                    ],
                    "_delete_elem": [
                        744
                    ],
                    "_delete_key": [
                        745
                    ],
                    "_inc": [
                        746
                    ],
                    "_prepend": [
                        757
                    ],
                    "_set": [
                        801
                    ],
                    "pk_columns": [
                        756,
                        "payment_pk_columns_input!"
                    ]
                }
            ],
            "update_payment_many": [
                752,
                {
                    "updates": [
                        813,
                        "[payment_updates!]!"
                    ]
                }
            ],
            "update_payment_review": [
                775,
                {
                    "_inc": [
                        769
                    ],
                    "_set": [
                        781
                    ],
                    "where": [
                        767,
                        "payment_review_bool_exp!"
                    ]
                }
            ],
            "update_payment_review_by_pk": [
                758,
                {
                    "_inc": [
                        769
                    ],
                    "_set": [
                        781
                    ],
                    "pk_columns": [
                        779,
                        "payment_review_pk_columns_input!"
                    ]
                }
            ],
            "update_payment_review_many": [
                775,
                {
                    "updates": [
                        793,
                        "[payment_review_updates!]!"
                    ]
                }
            ],
            "update_period": [
                837,
                {
                    "_inc": [
                        831
                    ],
                    "_set": [
                        843
                    ],
                    "where": [
                        829,
                        "period_bool_exp!"
                    ]
                }
            ],
            "update_period_by_pk": [
                820,
                {
                    "_inc": [
                        831
                    ],
                    "_set": [
                        843
                    ],
                    "pk_columns": [
                        841,
                        "period_pk_columns_input!"
                    ]
                }
            ],
            "update_period_many": [
                837,
                {
                    "updates": [
                        855,
                        "[period_updates!]!"
                    ]
                }
            ],
            "update_state_cache": [
                870,
                {
                    "_set": [
                        875
                    ],
                    "where": [
                        865,
                        "state_cache_bool_exp!"
                    ]
                }
            ],
            "update_state_cache_by_pk": [
                862,
                {
                    "_set": [
                        875
                    ],
                    "pk_columns": [
                        873,
                        "state_cache_pk_columns_input!"
                    ]
                }
            ],
            "update_state_cache_many": [
                870,
                {
                    "updates": [
                        879,
                        "[state_cache_updates!]!"
                    ]
                }
            ],
            "update_user_profile": [
                892,
                {
                    "_set": [
                        898
                    ],
                    "where": [
                        887,
                        "user_profile_bool_exp!"
                    ]
                }
            ],
            "update_user_profile_by_pk": [
                884,
                {
                    "_set": [
                        898
                    ],
                    "pk_columns": [
                        896,
                        "user_profile_pk_columns_input!"
                    ]
                }
            ],
            "update_user_profile_many": [
                892,
                {
                    "updates": [
                        902,
                        "[user_profile_updates!]!"
                    ]
                }
            ],
            "update_users_many": [
                923,
                {
                    "updates": [
                        936,
                        "[users_updates!]!"
                    ]
                }
            ],
            "__typename": [
                32
            ]
        },
        "Subscription": {
            "authProvider": [
                61,
                {
                    "id": [
                        32,
                        "String!"
                    ]
                }
            ],
            "authProviderRequest": [
                38,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "authProviderRequests": [
                38,
                {
                    "distinct_on": [
                        55,
                        "[authProviderRequests_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        52,
                        "[authProviderRequests_order_by!]"
                    ],
                    "where": [
                        42
                    ]
                }
            ],
            "authProviderRequestsAggregate": [
                39,
                {
                    "distinct_on": [
                        55,
                        "[authProviderRequests_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        52,
                        "[authProviderRequests_order_by!]"
                    ],
                    "where": [
                        42
                    ]
                }
            ],
            "authProviderRequests_stream": [
                38,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        57,
                        "[authProviderRequests_stream_cursor_input]!"
                    ],
                    "where": [
                        42
                    ]
                }
            ],
            "authProviders": [
                61,
                {
                    "distinct_on": [
                        74,
                        "[authProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        72,
                        "[authProviders_order_by!]"
                    ],
                    "where": [
                        64
                    ]
                }
            ],
            "authProvidersAggregate": [
                62,
                {
                    "distinct_on": [
                        74,
                        "[authProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        72,
                        "[authProviders_order_by!]"
                    ],
                    "where": [
                        64
                    ]
                }
            ],
            "authProviders_stream": [
                61,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        76,
                        "[authProviders_stream_cursor_input]!"
                    ],
                    "where": [
                        64
                    ]
                }
            ],
            "authRefreshToken": [
                80,
                {
                    "refreshToken": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "authRefreshTokens": [
                80,
                {
                    "distinct_on": [
                        98,
                        "[authRefreshTokens_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        96,
                        "[authRefreshTokens_order_by!]"
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "authRefreshTokensAggregate": [
                81,
                {
                    "distinct_on": [
                        98,
                        "[authRefreshTokens_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        96,
                        "[authRefreshTokens_order_by!]"
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "authRefreshTokens_stream": [
                80,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        100,
                        "[authRefreshTokens_stream_cursor_input]!"
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "authRole": [
                104,
                {
                    "role": [
                        32,
                        "String!"
                    ]
                }
            ],
            "authRoles": [
                104,
                {
                    "distinct_on": [
                        117,
                        "[authRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        115,
                        "[authRoles_order_by!]"
                    ],
                    "where": [
                        107
                    ]
                }
            ],
            "authRolesAggregate": [
                105,
                {
                    "distinct_on": [
                        117,
                        "[authRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        115,
                        "[authRoles_order_by!]"
                    ],
                    "where": [
                        107
                    ]
                }
            ],
            "authRoles_stream": [
                104,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        119,
                        "[authRoles_stream_cursor_input]!"
                    ],
                    "where": [
                        107
                    ]
                }
            ],
            "authUserProvider": [
                123,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "authUserProviders": [
                123,
                {
                    "distinct_on": [
                        141,
                        "[authUserProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        139,
                        "[authUserProviders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "authUserProvidersAggregate": [
                124,
                {
                    "distinct_on": [
                        141,
                        "[authUserProviders_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        139,
                        "[authUserProviders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "authUserProviders_stream": [
                123,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        143,
                        "[authUserProviders_stream_cursor_input]!"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "authUserRole": [
                147,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "authUserRoles": [
                147,
                {
                    "distinct_on": [
                        165,
                        "[authUserRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        163,
                        "[authUserRoles_order_by!]"
                    ],
                    "where": [
                        154
                    ]
                }
            ],
            "authUserRolesAggregate": [
                148,
                {
                    "distinct_on": [
                        165,
                        "[authUserRoles_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        163,
                        "[authUserRoles_order_by!]"
                    ],
                    "where": [
                        154
                    ]
                }
            ],
            "authUserRoles_stream": [
                147,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        167,
                        "[authUserRoles_stream_cursor_input]!"
                    ],
                    "where": [
                        154
                    ]
                }
            ],
            "authUserSecurityKey": [
                171,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "authUserSecurityKeys": [
                171,
                {
                    "distinct_on": [
                        192,
                        "[authUserSecurityKeys_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        190,
                        "[authUserSecurityKeys_order_by!]"
                    ],
                    "where": [
                        180
                    ]
                }
            ],
            "authUserSecurityKeysAggregate": [
                172,
                {
                    "distinct_on": [
                        192,
                        "[authUserSecurityKeys_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        190,
                        "[authUserSecurityKeys_order_by!]"
                    ],
                    "where": [
                        180
                    ]
                }
            ],
            "authUserSecurityKeys_stream": [
                171,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        200,
                        "[authUserSecurityKeys_stream_cursor_input]!"
                    ],
                    "where": [
                        180
                    ]
                }
            ],
            "auth_migrations": [
                212,
                {
                    "distinct_on": [
                        226,
                        "[auth_migrations_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        224,
                        "[auth_migrations_order_by!]"
                    ],
                    "where": [
                        216
                    ]
                }
            ],
            "auth_migrations_aggregate": [
                213,
                {
                    "distinct_on": [
                        226,
                        "[auth_migrations_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        224,
                        "[auth_migrations_order_by!]"
                    ],
                    "where": [
                        216
                    ]
                }
            ],
            "auth_migrations_by_pk": [
                212,
                {
                    "id": [
                        22,
                        "Int!"
                    ]
                }
            ],
            "auth_migrations_stream": [
                212,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        231,
                        "[auth_migrations_stream_cursor_input]!"
                    ],
                    "where": [
                        216
                    ]
                }
            ],
            "bucket": [
                241,
                {
                    "id": [
                        32,
                        "String!"
                    ]
                }
            ],
            "buckets": [
                241,
                {
                    "distinct_on": [
                        256,
                        "[buckets_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        254,
                        "[buckets_order_by!]"
                    ],
                    "where": [
                        245
                    ]
                }
            ],
            "bucketsAggregate": [
                242,
                {
                    "distinct_on": [
                        256,
                        "[buckets_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        254,
                        "[buckets_order_by!]"
                    ],
                    "where": [
                        245
                    ]
                }
            ],
            "buckets_stream": [
                241,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        261,
                        "[buckets_stream_cursor_input]!"
                    ],
                    "where": [
                        245
                    ]
                }
            ],
            "en_currencies": [
                274,
                {
                    "distinct_on": [
                        289,
                        "[en_currencies_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        287,
                        "[en_currencies_order_by!]"
                    ],
                    "where": [
                        277
                    ]
                }
            ],
            "en_currencies_aggregate": [
                275,
                {
                    "distinct_on": [
                        289,
                        "[en_currencies_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        287,
                        "[en_currencies_order_by!]"
                    ],
                    "where": [
                        277
                    ]
                }
            ],
            "en_currencies_by_pk": [
                274,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_currencies_stream": [
                274,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        291,
                        "[en_currencies_stream_cursor_input]!"
                    ],
                    "where": [
                        277
                    ]
                }
            ],
            "en_notifications": [
                295,
                {
                    "distinct_on": [
                        310,
                        "[en_notifications_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        308,
                        "[en_notifications_order_by!]"
                    ],
                    "where": [
                        298
                    ]
                }
            ],
            "en_notifications_aggregate": [
                296,
                {
                    "distinct_on": [
                        310,
                        "[en_notifications_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        308,
                        "[en_notifications_order_by!]"
                    ],
                    "where": [
                        298
                    ]
                }
            ],
            "en_notifications_by_pk": [
                295,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_notifications_stream": [
                295,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        312,
                        "[en_notifications_stream_cursor_input]!"
                    ],
                    "where": [
                        298
                    ]
                }
            ],
            "en_partner_steps": [
                316,
                {
                    "distinct_on": [
                        331,
                        "[en_partner_steps_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        329,
                        "[en_partner_steps_order_by!]"
                    ],
                    "where": [
                        319
                    ]
                }
            ],
            "en_partner_steps_aggregate": [
                317,
                {
                    "distinct_on": [
                        331,
                        "[en_partner_steps_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        329,
                        "[en_partner_steps_order_by!]"
                    ],
                    "where": [
                        319
                    ]
                }
            ],
            "en_partner_steps_by_pk": [
                316,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_partner_steps_stream": [
                316,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        333,
                        "[en_partner_steps_stream_cursor_input]!"
                    ],
                    "where": [
                        319
                    ]
                }
            ],
            "en_payment_providers": [
                337,
                {
                    "distinct_on": [
                        352,
                        "[en_payment_providers_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        350,
                        "[en_payment_providers_order_by!]"
                    ],
                    "where": [
                        340
                    ]
                }
            ],
            "en_payment_providers_aggregate": [
                338,
                {
                    "distinct_on": [
                        352,
                        "[en_payment_providers_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        350,
                        "[en_payment_providers_order_by!]"
                    ],
                    "where": [
                        340
                    ]
                }
            ],
            "en_payment_providers_by_pk": [
                337,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_payment_providers_stream": [
                337,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        354,
                        "[en_payment_providers_stream_cursor_input]!"
                    ],
                    "where": [
                        340
                    ]
                }
            ],
            "en_permissions": [
                358,
                {
                    "distinct_on": [
                        373,
                        "[en_permissions_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        371,
                        "[en_permissions_order_by!]"
                    ],
                    "where": [
                        361
                    ]
                }
            ],
            "en_permissions_aggregate": [
                359,
                {
                    "distinct_on": [
                        373,
                        "[en_permissions_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        371,
                        "[en_permissions_order_by!]"
                    ],
                    "where": [
                        361
                    ]
                }
            ],
            "en_permissions_by_pk": [
                358,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_permissions_stream": [
                358,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        375,
                        "[en_permissions_stream_cursor_input]!"
                    ],
                    "where": [
                        361
                    ]
                }
            ],
            "en_recurrencies": [
                379,
                {
                    "distinct_on": [
                        394,
                        "[en_recurrencies_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        392,
                        "[en_recurrencies_order_by!]"
                    ],
                    "where": [
                        382
                    ]
                }
            ],
            "en_recurrencies_aggregate": [
                380,
                {
                    "distinct_on": [
                        394,
                        "[en_recurrencies_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        392,
                        "[en_recurrencies_order_by!]"
                    ],
                    "where": [
                        382
                    ]
                }
            ],
            "en_recurrencies_by_pk": [
                379,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_recurrencies_stream": [
                379,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        396,
                        "[en_recurrencies_stream_cursor_input]!"
                    ],
                    "where": [
                        382
                    ]
                }
            ],
            "en_statuses": [
                400,
                {
                    "distinct_on": [
                        415,
                        "[en_statuses_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        413,
                        "[en_statuses_order_by!]"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "en_statuses_aggregate": [
                401,
                {
                    "distinct_on": [
                        415,
                        "[en_statuses_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        413,
                        "[en_statuses_order_by!]"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "en_statuses_by_pk": [
                400,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_statuses_stream": [
                400,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        417,
                        "[en_statuses_stream_cursor_input]!"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "en_trans_types": [
                421,
                {
                    "distinct_on": [
                        436,
                        "[en_trans_types_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        434,
                        "[en_trans_types_order_by!]"
                    ],
                    "where": [
                        424
                    ]
                }
            ],
            "en_trans_types_aggregate": [
                422,
                {
                    "distinct_on": [
                        436,
                        "[en_trans_types_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        434,
                        "[en_trans_types_order_by!]"
                    ],
                    "where": [
                        424
                    ]
                }
            ],
            "en_trans_types_by_pk": [
                421,
                {
                    "value": [
                        32,
                        "String!"
                    ]
                }
            ],
            "en_trans_types_stream": [
                421,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        438,
                        "[en_trans_types_stream_cursor_input]!"
                    ],
                    "where": [
                        424
                    ]
                }
            ],
            "file": [
                442,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "files": [
                442,
                {
                    "distinct_on": [
                        465,
                        "[files_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        463,
                        "[files_order_by!]"
                    ],
                    "where": [
                        453
                    ]
                }
            ],
            "filesAggregate": [
                443,
                {
                    "distinct_on": [
                        465,
                        "[files_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        463,
                        "[files_order_by!]"
                    ],
                    "where": [
                        453
                    ]
                }
            ],
            "files_stream": [
                442,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        475,
                        "[files_stream_cursor_input]!"
                    ],
                    "where": [
                        453
                    ]
                }
            ],
            "group": [
                487,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "group_aggregate": [
                488,
                {
                    "distinct_on": [
                        511,
                        "[group_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        509,
                        "[group_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "group_by_pk": [
                487,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "group_stream": [
                487,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        521,
                        "[group_stream_cursor_input]!"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "invitation": [
                533,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "invitation_aggregate": [
                534,
                {
                    "distinct_on": [
                        552,
                        "[invitation_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        550,
                        "[invitation_order_by!]"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "invitation_by_pk": [
                533,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "invitation_stream": [
                533,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        554,
                        "[invitation_stream_cursor_input]!"
                    ],
                    "where": [
                        540
                    ]
                }
            ],
            "member": [
                563,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "member_aggregate": [
                564,
                {
                    "distinct_on": [
                        585,
                        "[member_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        583,
                        "[member_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "member_by_pk": [
                563,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "member_stream": [
                563,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        593,
                        "[member_stream_cursor_input]!"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "notification": [
                605,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "notification_aggregate": [
                606,
                {
                    "distinct_on": [
                        625,
                        "[notification_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        623,
                        "[notification_order_by!]"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "notification_by_pk": [
                605,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "notification_stream": [
                605,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        629,
                        "[notification_stream_cursor_input]!"
                    ],
                    "where": [
                        614
                    ]
                }
            ],
            "partner": [
                636,
                {
                    "distinct_on": [
                        725,
                        "[partner_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        723,
                        "[partner_order_by!]"
                    ],
                    "where": [
                        643
                    ]
                }
            ],
            "partner_aggregate": [
                637,
                {
                    "distinct_on": [
                        725,
                        "[partner_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        723,
                        "[partner_order_by!]"
                    ],
                    "where": [
                        643
                    ]
                }
            ],
            "partner_by_pk": [
                636,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "partner_campaign": [
                644,
                {
                    "distinct_on": [
                        668,
                        "[partner_campaign_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        666,
                        "[partner_campaign_order_by!]"
                    ],
                    "where": [
                        655
                    ]
                }
            ],
            "partner_campaign_aggregate": [
                645,
                {
                    "distinct_on": [
                        668,
                        "[partner_campaign_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        666,
                        "[partner_campaign_order_by!]"
                    ],
                    "where": [
                        655
                    ]
                }
            ],
            "partner_campaign_by_pk": [
                644,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "partner_campaign_stream": [
                644,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        678,
                        "[partner_campaign_stream_cursor_input]!"
                    ],
                    "where": [
                        655
                    ]
                }
            ],
            "partner_operator": [
                699,
                {
                    "distinct_on": [
                        717,
                        "[partner_operator_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        715,
                        "[partner_operator_order_by!]"
                    ],
                    "where": [
                        706
                    ]
                }
            ],
            "partner_operator_aggregate": [
                700,
                {
                    "distinct_on": [
                        717,
                        "[partner_operator_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        715,
                        "[partner_operator_order_by!]"
                    ],
                    "where": [
                        706
                    ]
                }
            ],
            "partner_operator_by_pk": [
                699,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "partner_operator_stream": [
                699,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        719,
                        "[partner_operator_stream_cursor_input]!"
                    ],
                    "where": [
                        706
                    ]
                }
            ],
            "partner_stream": [
                636,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        727,
                        "[partner_stream_cursor_input]!"
                    ],
                    "where": [
                        643
                    ]
                }
            ],
            "payment": [
                731,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payment_aggregate": [
                732,
                {
                    "distinct_on": [
                        800,
                        "[payment_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        755,
                        "[payment_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "payment_by_pk": [
                731,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "payment_review": [
                758,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_review_aggregate": [
                759,
                {
                    "distinct_on": [
                        780,
                        "[payment_review_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        778,
                        "[payment_review_order_by!]"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_review_by_pk": [
                758,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "payment_review_stream": [
                758,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        788,
                        "[payment_review_stream_cursor_input]!"
                    ],
                    "where": [
                        767
                    ]
                }
            ],
            "payment_stream": [
                731,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        808,
                        "[payment_stream_cursor_input]!"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "period": [
                820,
                {
                    "distinct_on": [
                        842,
                        "[period_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        840,
                        "[period_order_by!]"
                    ],
                    "where": [
                        829
                    ]
                }
            ],
            "period_aggregate": [
                821,
                {
                    "distinct_on": [
                        842,
                        "[period_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        840,
                        "[period_order_by!]"
                    ],
                    "where": [
                        829
                    ]
                }
            ],
            "period_by_pk": [
                820,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "period_stream": [
                820,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        850,
                        "[period_stream_cursor_input]!"
                    ],
                    "where": [
                        829
                    ]
                }
            ],
            "state_cache": [
                862,
                {
                    "distinct_on": [
                        874,
                        "[state_cache_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        872,
                        "[state_cache_order_by!]"
                    ],
                    "where": [
                        865
                    ]
                }
            ],
            "state_cache_aggregate": [
                863,
                {
                    "distinct_on": [
                        874,
                        "[state_cache_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        872,
                        "[state_cache_order_by!]"
                    ],
                    "where": [
                        865
                    ]
                }
            ],
            "state_cache_by_pk": [
                862,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "state_cache_stream": [
                862,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        876,
                        "[state_cache_stream_cursor_input]!"
                    ],
                    "where": [
                        865
                    ]
                }
            ],
            "user": [
                903,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "user_profile": [
                884,
                {
                    "distinct_on": [
                        897,
                        "[user_profile_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        895,
                        "[user_profile_order_by!]"
                    ],
                    "where": [
                        887
                    ]
                }
            ],
            "user_profile_aggregate": [
                885,
                {
                    "distinct_on": [
                        897,
                        "[user_profile_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        895,
                        "[user_profile_order_by!]"
                    ],
                    "where": [
                        887
                    ]
                }
            ],
            "user_profile_by_pk": [
                884,
                {
                    "id": [
                        937,
                        "uuid!"
                    ]
                }
            ],
            "user_profile_stream": [
                884,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        899,
                        "[user_profile_stream_cursor_input]!"
                    ],
                    "where": [
                        887
                    ]
                }
            ],
            "users": [
                903,
                {
                    "distinct_on": [
                        929,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        926,
                        "[users_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "usersAggregate": [
                904,
                {
                    "distinct_on": [
                        929,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        22
                    ],
                    "offset": [
                        22
                    ],
                    "order_by": [
                        926,
                        "[users_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "users_stream": [
                903,
                {
                    "batch_size": [
                        22,
                        "Int!"
                    ],
                    "cursor": [
                        933,
                        "[users_stream_cursor_input]!"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "__typename": [
                32
            ]
        }
    }
}