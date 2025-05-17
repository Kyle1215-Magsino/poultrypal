<template>
  <v-container fluid class="px-2 py-4">  <!-- Reduced horizontal padding -->
    <v-row justify="center">
      <v-col cols="12" md="12" lg="10">  <!-- Wider columns to use more space -->
        <!-- Header -->
        <h1 class="dashboard-header">Dashboard</h1>

        <!-- Cards -->
        <v-row dense>
          <v-col cols="12" sm="4">
            <v-card class="dashboard-card" outlined>
              <v-card-text>
                <div class="card-title">Chicken Feed</div>
                <div class="card-value">1200</div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card class="dashboard-card" outlined>
              <v-card-text>
                <div class="card-title">Feed Grams</div>
                <div class="card-value">35,000 g</div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card class="dashboard-card" outlined>
              <v-card-text>
                <div class="card-title">Mortality Rate</div>
                <div class="card-value">2.5%</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Bar chart -->
        <v-row class="mt-6">
          <v-col cols="12">
            <v-card class="dashboard-card" outlined>
              <v-card-text class="d-flex justify-center">
                <canvas id="poultryBarChart" style="width: 100%; max-width: 100%;"></canvas>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { nextTick } from 'vue'

export default {
  name: "Dashboard",
  mounted() {
    nextTick(() => {
      this.renderChart();
    });
  },
  methods: {
    renderChart() {
      const Chart = window.Chart;
      if (!Chart) {
        console.error('Chart.js not loaded!');
        return;
      }
      const ctx = document.getElementById('poultryBarChart').getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [
            {
              label: 'Chicken Feed (units)',
              data: [150, 180, 120, 170, 160, 190, 200],
              backgroundColor: 'rgba(255, 99, 132, 0.7)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            },
            {
              label: 'Feed Grams',
              data: [5000, 6000, 4800, 5300, 5600, 6200, 6500],
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            },
            {
              label: 'Mortality Rate (%)',
              data: [0.5, 0.7, 0.6, 0.4, 0.3, 0.2, 0.1],
              backgroundColor: 'rgba(255, 206, 86, 0.7)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }
}
</script>

<style scoped>
.dashboard-header {
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 24px;
  color: #222;
  text-align: center;
}

.dashboard-card {
  background-color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 16px;
}

.card-title {
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
}

.card-value {
  font-size: 24px;
  font-weight: bold;
  color: #222;
}

canvas {
  height: 300px !important;
  display: block;
}
</style>
