<template>
  <div class="home">
    <img class="logo" alt="o-code logo" src="../assets/logo.png">
    <h1 class="task__title">Задание</h1>
    <div class="images__container">
      <h3>Макет</h3>
      <div class="images__container-inner">
        <img class="task__image" src="@/assets/table1.png">
        <img class="task__image" src="@/assets/table2.png">
      </div>
    </div>
    <div class="tasks">
      <div class="junior__part">
        <h3>Задача</h3>
        <ol>
          <li>Загрузить JSON с помощью REST запроса (локальное из статической папки);<span class="done">Сделано</span></li>
          <li>Отобразить в таблице;<span class="done">Сделано</span></li>
          <li>Список полей для кнопки “Редактировать таблицу” business_name(наименование организации), business_address(адрес организации), business_city(город организации), business_phone_number(номер организации),  inspection_date(дата инспекции), inspection_description(статус инспекции),  inspection_type(тип проведения инспекции);<span class="done">Сделано</span></li>
          <li>Иметь возможность добавления и скрытия полей;<span class="done">Сделано</span></li>
          <li>Поиск должен осуществляться по всем полям JSON’а(из списка “Редактировать таблицу”).<span class="done">Сделано</span></li>
        </ol>
      </div>
      <div class="middle__part">
        <h3>Задача</h3>
        <ol>
          <li>Загрузить JSON с помощью HTTP запроса (локальное из статической папки);<span class="done">+- Если под HTTP подразумевается REST то сделано</span></li>
          <li>Отобразить в таблице;<span class="done">Сделано</span></li>
          <li>Список полей для кнопки “Редактировать таблицу” business_name(наименование организации), business_address(адрес организации), business_city(город организации), business_phone_number(номер организации),  inspection_date(дата инспекции), inspection_description(статус инспекции),  inspection_type(тип проведения инспекции);<span class="done">Сделано</span></li>
          <li>Иметь возможность добавления и скрытия полей;<span class="done">Сделано</span></li>
          <li>Поиск должен осуществляться по выбранным полям таблицы из раздела “Редактировать таблицу”;<span class="done">Сделано</span></li>
          <li>В зависимости от “Статус инспекции” необходимо выделять поля таблицы;<span class="done">Сделано</span></li>
          <li>Реализовать сортировку по полям таблицы;<span class="done">Сделано</span></li>
          <li>Возможность выбора из диапазона даты инспекции.<span class="not_done">Не сделано</span></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
.logo {
  width: 300px;
  margin-bottom: 20px;
}
.task__title {
  margin-bottom: 20px;
}

.images__container {
  box-shadow: 4px 4px 20px #d7d7d7;
  background-color: #fdfdfd;
  padding: 20px;
  margin-bottom: 30px;
  h3 {
    margin-bottom: 20px;
  }
  .images__container-inner {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .task__image {
      width: 500px;
    }
  }
}

.tasks {
  display: flex;
  justify-content: space-between;
  box-shadow: 4px 4px 20px #d7d7d7;
  background-color: #fdfdfd;
  padding: 20px 60px;
  margin-bottom: 50px;
  h3 {
    margin-bottom: 15px;
  }
  ol {
    text-align: left;
  }
  .junior__part {
    margin-right: 60px;
  }
  .middle__part {
  }

  .done {
    color: #61dc00;
    margin-left: 15px;
  }
  .not_done {
    color: #ff5252;
    margin-left: 15px;
  }
}
</style>
