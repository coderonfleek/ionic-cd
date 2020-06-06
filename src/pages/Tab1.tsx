import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButton,
  IonCard,
  IonCardContent,
  IonInput
} from "@ionic/react";

import { add, pin } from "ionicons/icons";

import "./Tab1.css";

const sampleTasks = [
  {
    id: 1,
    name: "Wash dishes"
  },
  {
    id: 2,
    name: "Buy Groceries"
  }
];

interface Task {
  id: number;
  name: string;
}

const Tab1: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [taskName = "", setTaskName] = useState<string>();

  function addNewTask() {
    const new_id = tasks.length + 1;

    const newTask = {
      id: new_id,
      name: taskName
    };

    tasks.push(newTask);

    setTasks(tasks);

    setTaskName("");

    setShowModal(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">Task Manager</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {tasks.length > 0 ? (
            tasks.map((item: Task) => {
              return (
                <IonItemSliding key={item.id}>
                  <IonItem className="todo-item">
                    <IonLabel>{item.name}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption onClick={() => {}}>Done</IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              );
            })
          ) : (
            <IonItem>
              <IonLabel color="danger">
                You are yet to add tasks for Today
              </IonLabel>
            </IonItem>
          )}
        </IonList>

        {/* Modal*/}
        <IonModal isOpen={showModal}>
          <IonCard>
            <IonItem>
              <IonLabel color="primary">Add New Task</IonLabel>
            </IonItem>

            <IonCardContent>
              <IonItem>
                <IonInput
                  value={taskName}
                  placeholder="Enter Task Name..."
                  onIonChange={(e) => setTaskName(e.detail.value!)}
                ></IonInput>
              </IonItem>

              <IonButton
                expand="full"
                color="success"
                onClick={() => addNewTask()}
              >
                Add Task
              </IonButton>
            </IonCardContent>
          </IonCard>
          <IonButton color="success" onClick={() => setShowModal(false)}>
            Close Modal
          </IonButton>
        </IonModal>

        {/* FAB */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="success" onClick={() => setShowModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
