const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {

    proffyValue = {
        name: 'Pedro Luiz',
        avatar: 'https://lh3.googleusercontent.com/DgdTZ3HSyCo7zr1SYxPfA4oYpqoaon9IR2zwDXI9Fzyut13626fWZiWS4EFtE1NYXaeS0S657F5QI9f4hQA-QKfRjeqHfBKUrzDZm4LUtjN2BNn4OiZTiG_oIdv6Ucnqi5d5CQO_hPAZW07vzZEBY4Y3iuCVPsmG2En4t9y51fzslQPVxomomt3_-nfvG9wTPJvi5zzngtvWB8-V_XmJRCnYv2kz94czky62i5rPoOk-urSo56p59Q4KC9Pc2jPbDaA3P8Kmr5P_3wGC36NO5DLgH3Y8afrXBaC7EB0lfBw26vE7hs_YuPlIGq_jeYLeN7fkDufstvBFKqvclKC4J6aTa2f40XWjtUC91TFAMofB-o34gsyoTOxZckdTToBJaF2_3NjjXRD_Y_HLYJKSZssMAr_bdoE593mCz6wTBrefFJadsyEpqhbBVbzAMZjjJs4HZI550GasOXKCCYdNiASwoXWGb3ix_GBmlbw9WuiSMBH6bYhL18VTZq-QAkvLx8gOt8zGxfSMVCxhpFYAZF2hpfKz5uwTcK4pfK8aVsIBxD8eIgUDH_GBSyihptnes4TlcPtr2bbdAWuj8c1q8E9rUcWd-Fq02Vfqbmo8NjonsSVqFZToFiP9jM2t9JV5il9zglSWiDbx-NOaSnQitA1PdywS9NE7fTnzRBX7xTJZJs0sbXixxao1dbbu=s937-no?authuser=0',
        whatsapp: '41988290329',
        bio: 'Aprendendo a programar',
    }

    classValue = {
        subject: 1,
        cost: '50',
    }

    classScheduleValues = [
        {
        weekday: 3,
        time_from: 1220,
        time_to: 2020
        },
        {
        weekday: 3,
        time_from: 720,
        time_to: 2520
        }
    ]

    const selectedProffys = await db.all("SELECT * FROM proffys")

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = "1"
            AND class_schedule.weekday = "3"
            AND class_schedule.time_from <= "820"
            AND class_schedule.time_to > "1225"
    `)
})